// tslint:disable:underscore-consistent-invocation
import * as _ from 'lodash';

export interface FileNode<T> extends Node {
  file: T;
}

export enum FolderType {
  PLAIN,
  RECORDING,
  TRACK,
}

export interface FolderNode extends Node {
  id?: number;
  folderType: FolderType;
  children: Node[];
}

export interface Node {
  filename: String;
}

export interface RecordingModel {
  id: number;
  name: string;
  date: string;
  tracks: Track[];
}

export interface Track {
  id: number;
  trackNumber: number;
  name: string;
  channels: ChannelRecordingFile[];
}

export interface ChannelRecordingFile {
  id: number;
  channelNr: number;
  name: string;
  size: number;
}

export class RecordingsToFileTreeConverter {
  public convert() {
    const recordingsPerYear = new Map();

    _.sortBy(recordings, ['date', 'name']).forEach(recording => {
      const year = this.toDate(recording.date)
        .getFullYear()
        .toString();

      if (!recordingsPerYear.has(year)) {
        recordingsPerYear.set(year, {
          filename: year,
          type: 0,
          children: [],
        });
      }

      const formatted = this.formatDate(this.toDate(recording.date));
      recordingsPerYear.get(year).children.push({
        type: 1,
        filename: `${formatted} ${recording.name}`,
        children: _.sortBy(recording.tracks, 'trackNumber').map(track => {
          return {
            type: 2,
            filename: `${track.trackNumber}. ${track.name}`,
            id: track.id,
            children: _.sortBy(track.channels, 'channelNr').map(channel => {
              return {
                filename: channel.name,
                file: {
                  ...channel,
                },
              };
            }),
          };
        }),
      });
    });

    return [...recordingsPerYear.values()];
  }

  private toDate(str) {
    return new Date(
      str.slice(0, 4),
      Number(str.slice(4, 6)) - 1,
      str.slice(6, 8),
    );
  }

  private formatDate(date) {
    /*
    works in browser, but not in nodejs
          const options = { month: 'long', day: 'numeric' };
          const formatted = date.toLocaleDateString('de-DE', options);
    */
    const monthNames = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ];

    return `${date.getDate()}. ${monthNames[date.getMonth()]}`;
  }
}

export const recordings: RecordingModel[] = [
  {
    id: 1234,
    name: 'Aufnahme 5',
    date: '20181107',
    tracks: [
      {
        id: 1324,
        trackNumber: 1,
        name: 'track 1',
        channels: [
          {
            id: 31,
            channelNr: 1,
            name: 'Gesang Robin',
            size: 2345345,
          },
          {
            id: 33,
            channelNr: 2,
            name: 'Gesang Beni',
            size: 243233,
          },
          {
            id: 35,
            channelNr: 3,
            name: 'Gesang Silvan',
            size: 987987,
          },
        ],
      },
    ],
  },
  {
    id: 2345,
    name: 'Aufnahme 3',
    date: '20181123',
    tracks: [
      {
        id: 1324,
        trackNumber: 1,
        name: 'track 1',
        channels: [
          {
            id: 31,
            channelNr: 1,
            name: 'Gesang Robin',
            size: 2345345,
          },
          {
            id: 33,
            channelNr: 2,
            name: 'Gesang Beni',
            size: 243233,
          },
          {
            id: 35,
            channelNr: 3,
            name: 'Gesang Silvan',
            size: 987987,
          },
        ],
      },
    ],
  },
  {
    id: 3456,
    name: 'Aufnahme 2',
    date: '20170803',
    tracks: [
      {
        id: 1324,
        trackNumber: 1,
        name: 'track 1',
        channels: [
          {
            id: 21,
            channelNr: 1,
            name: 'Gesang Robin',
            size: 2345345,
          },
          {
            id: 23,
            channelNr: 2,
            name: 'Gesang Beni',
            size: 243233,
          },
          {
            id: 25,
            channelNr: 3,
            name: 'Gesang Silvan',
            size: 987987,
          },
        ],
      },
    ],
  },
  {
    id: 4567,
    name: 'Aufnahme 1',
    date: '20170803',
    tracks: [
      {
        id: 1324,
        trackNumber: 1,
        name: 'track 1',
        channels: [
          {
            id: 11,
            channelNr: 1,
            name: 'Gesang Robin',
            size: 2345345,
          },
          {
            id: 13,
            channelNr: 2,
            name: 'Gesang Beni',
            size: 243233,
          },
          {
            id: 15,
            channelNr: 3,
            name: 'Gesang Silvan',
            size: 987987,
          },
        ],
      },
    ],
  },
  {
    id: 5678,
    name: 'Aufnahme 4',
    date: '20171013',
    tracks: [
      {
        id: 1324,
        trackNumber: 1,
        name: 'track 1',
        channels: [
          {
            id: 41,
            channelNr: 1,
            name: 'Gesang Robin',
            size: 2345345,
          },
          {
            id: 43,
            channelNr: 2,
            name: 'Gesang Beni',
            size: 243233,
          },
          {
            id: 45,
            channelNr: 3,
            name: 'Gesang Silvan',
            size: 987987,
          },
        ],
      },
    ],
  },
];
