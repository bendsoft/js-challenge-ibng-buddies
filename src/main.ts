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

export interface Recording {
  id: number;
  name: string;
  date: string;
  channels: ChannelRecordingFile[];
}

export interface ChannelRecordingFile {
  id: number;
  channelNr: number;
  name: string;
  size: number;
}

export const recordingsToFileTreeConverter = (): FolderNode[] => {
  return recordings;
};

export const recordings: Recording[] = [
  {
    id: 2342134,
    name: 'Aufnahme 3',
    date: '20181123',
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
  },
  {
    id: 566776,
    name: 'Aufnahme 2',
    date: '20170803',
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
  },
  {
    id: 566776,
    name: 'Aufnahme 1',
    date: '20170803',
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
  },
  {
    id: 7989879,
    name: 'Aufnahme 4',
    date: '20171013',
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
  }];
