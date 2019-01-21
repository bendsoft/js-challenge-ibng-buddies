import * as _ from 'lodash';
import * as _moment from 'moment';
import {ChannelRecordingFile, FileNode, FolderNode, FolderType, RecordingModel, Track} from "../src/main";

const moment = _moment;
moment.locale('de-CH');

export class RecordingListUtils {
  public static buildFileTree(recordings: RecordingModel[]): FolderNode[] {
    const yearsMap = new Map<string, FolderNode>();

    _.orderBy(recordings, 'date', 'desc')
      .filter(rec => rec.tracks.length > 0)
      .forEach(rec => {
        const sessionItem = {
          filename: `${RecordingListUtils.extractDayMonth(rec)} ${rec.name}`,
          folderType: FolderType.RECORDING,
          children: RecordingListUtils.createTrackList(rec.tracks)
        };

        const year = RecordingListUtils.extractYear(rec);
        if (yearsMap.has(year)) {
          yearsMap.get(year).children.push(sessionItem);
        } else {
          yearsMap.set(year, {
            filename: year,
            folderType: FolderType.PLAIN,
            children: [sessionItem]
          });
        }
      });

    return Array.from(yearsMap.values());
  }

  private static createTrackList(tracks: Track[]): FolderNode[] {
    return _.sortBy(tracks,'trackNumber')
      .map(track => ({
        filename: `${track.trackNumber}. ${track.name}`,
        id: track.id,
        folderType: FolderType.TRACK,
        children: RecordingListUtils.createChannelList(track.channels)
      }));
  }

  private static createChannelList(channels: ChannelRecordingFile[]): FileNode<ChannelRecordingFile>[] {
    return _.sortBy(channels,'channelNr')
      .map(channel => ({
        filename: channel.name,
        file: channel
      }));
  }

  private static extractYear(recording: RecordingModel) {
    return (recording.date as string).substring(0, 4);
  }

  private static extractDayMonth(recording: RecordingModel) {
    return moment((recording.date as string), 'YYYYMMDD').format('Do MMMM');
  }
}
