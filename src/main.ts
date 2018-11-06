export interface FileNode<T> extends Node {
  file: T
}

export interface FolderNode extends Node {
  id?: number;
  isRecording: boolean;
  children: Node[];
}

export interface Node {
  filename: String;
}

export interface RecordingModel {
  id: number;
  name: string;
  date: string;
  tracks: Track[]
}

export interface Track {
  id: number,
  number: number,
  name: string,
  channels: ChannelRecordingFile[];
}

export interface ChannelRecordingFile {
  id: number;
  channelNr: number;
  name: string;
  size: number;
}

export class RecordingsToFileTreeConverter {
  static convert() {
    return recordings;
  };
}

export const recordings: RecordingModel[] = [
  {
    id: 1234,
    name: 'Aufnahme 5',
    date: '20181107',
    tracks: [{
      id: 1324,
      number: 1,
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
      number: 1,
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
      number: 1,
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
      number: 1,
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
      number: 1,
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
