export interface FileNode<T> extends Node {
  file: T;
}

export enum FolderType {
  PLAIN, RECORDING, TRACK
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

  public static convert() {
    const tempMap = new Map<string, any>();
    recordings.forEach(recording => {
      const year = getYear(recording.date);
      if (!tempMap.has(year)) {
        tempMap.set(year, []);
      }

      tempMap.get(year).push(recording);
    });

    return Array.from(tempMap).map(convertRecordingTuple).sort(getComp(item => item.filename));
  }
}

function convertRecordingTuple([filename, recording]:[string, any]) {
  const type = 0;
  const children = recording.sort(getComp(item => [item.date, +item.name.split(" ")[1]])).map(convertRecording);
  return {filename, type, children};
}

function convertChannel(file: ChannelRecordingFile) {
  const filename = file.name;
  return {filename, file};
}

function convertTrack(track: Track) {
  const filename = `${track.trackNumber}. ${track.name}`;
  const id = track.id;
  const type = 2;
  const children = track.channels.sort(getComp(chan => chan.id)).map(convertChannel);
  return {filename, id, type, children};
}

function convertRecording(recording: RecordingModel) {
  const filename = getTranslatedDay(recording.date) + " " + recording.name;
  const type = 1;
  const children = recording.tracks.sort(getComp(track => track.trackNumber)).map(convertTrack);
  return {filename, type, children};
}

function getComp(propertyGetter) {
  return function (a, b) {
    if (propertyGetter(a) > propertyGetter(b)) {
      return 1;
    }
    if (propertyGetter(a) < propertyGetter(b)) {
      return -1;
    }
    return 0;
  };
}

function getYear(date: string) {
  return date.substring(0, 4);
}

function getTranslatedDay(date: string) {
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  const day = +(date.substring(6, 8))
  const month = months[+(date.substring(4, 6)) - 1]
  return `${day}. ${month}`;
}

export const recordings: RecordingModel[] = [
  {
    id: 1234,
    name: 'Aufnahme 5',
    date: '20181107',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channels: [
        {
          id: 31,
          channelNr: 1,
          name: 'Gesang Robin',
          size: 2345345
        },
        {
          id: 33,
          channelNr: 2,
          name: 'Gesang Beni',
          size: 243233
        },
        {
          id: 35,
          channelNr: 3,
          name: 'Gesang Silvan',
          size: 987987
        }
      ]
    }]
  },
  {
    id: 2345,
    name: 'Aufnahme 3',
    date: '20181123',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channels: [
        {
          id: 31,
          channelNr: 1,
          name: 'Gesang Robin',
          size: 2345345
        },
        {
          id: 33,
          channelNr: 2,
          name: 'Gesang Beni',
          size: 243233
        },
        {
          id: 35,
          channelNr: 3,
          name: 'Gesang Silvan',
          size: 987987
        }
      ]
    }]
  },
  {
    id: 3456,
    name: 'Aufnahme 2',
    date: '20170803',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channels: [
        {
          id: 21,
          channelNr: 1,
          name: 'Gesang Robin',
          size: 2345345
        },
        {
          id: 23,
          channelNr: 2,
          name: 'Gesang Beni',
          size: 243233
        },
        {
          id: 25,
          channelNr: 3,
          name: 'Gesang Silvan',
          size: 987987
        }
      ]
    }]
  },
  {
    id: 4567,
    name: 'Aufnahme 1',
    date: '20170803',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channels: [
        {
          id: 11,
          channelNr: 1,
          name: 'Gesang Robin',
          size: 2345345
        },
        {
          id: 13,
          channelNr: 2,
          name: 'Gesang Beni',
          size: 243233
        },
        {
          id: 15,
          channelNr: 3,
          name: 'Gesang Silvan',
          size: 987987
        }
      ]
    }]
  },
  {
    id: 5678,
    name: 'Aufnahme 4',
    date: '20171013',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channels: [
        {
          id: 41,
          channelNr: 1,
          name: 'Gesang Robin',
          size: 2345345
        },
        {
          id: 43,
          channelNr: 2,
          name: 'Gesang Beni',
          size: 243233
        },
        {
          id: 45,
          channelNr: 3,
          name: 'Gesang Silvan',
          size: 987987
        }
      ]
    }]
  }];
