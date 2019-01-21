import {RecordingListUtils} from "./recording-list-utils";

export interface FileNode<T> extends Node {
  file: T;
}

export enum FolderType {
  PLAIN, RECORDING, TRACK
}

export interface FolderNode extends Node {
  id?: number | string;
  folderType: FolderType;
  children: Node[];
}

export interface Node {
  filename: String;
}

export interface RecordingModel {
  id: number | string;
  name: string;
  recordingDate: string;
  tracks: Track[];
}

export interface Track {
  id: number | string;
  trackNumber: number;
  name: string;
  channelRecordingFiles: ChannelRecordingFile[];
}

export interface ChannelRecordingFile {
  id: number | string;
  channelNumber: number;
  name: string;
  filename: string;
  type: string;
  data: string;
}

export class RecordingsToFileTreeConverter {
  public static convert() {
    return RecordingListUtils.buildFileTree(recordings);
  };
}

export const recordings: RecordingModel[] = [
  {
    id: 1234,
    name: 'Aufnahme 5',
    recordingDate: '20171107',
    tracks: [{
      id: 1325,
      trackNumber: 2,
      name: 'track 2',
      channelRecordingFiles: [
        {
          id: 31,
          channelNumber: 2,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 33,
          channelNumber: 1,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 35,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }, {
      id: 1324,
      trackNumber: 3,
      name: 'track 3',
      channelRecordingFiles: [
        {
          id: 31,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 33,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 35,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }, {
      id: 1329,
      trackNumber: 1,
      name: 'track 1',
      channelRecordingFiles: [
        {
          id: 31,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 33,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 35,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }]
  },
  {
    id: 2345,
    name: 'Aufnahme 3',
    recordingDate: '20171123',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channelRecordingFiles: [
        {
          id: 31,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 33,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 35,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }]
  },
  {
    id: 3456,
    name: 'Aufnahme 2',
    recordingDate: '20180103',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channelRecordingFiles: [
        {
          id: 21,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 23,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 25,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }]
  },
  {
    id: 4567,
    name: 'Aufnahme 1',
    recordingDate: '20170803',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channelRecordingFiles: [
        {
          id: 11,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 13,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 15,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }]
  },
  {
    id: 5678,
    name: 'Aufnahme 4',
    recordingDate: '20180813',
    tracks: [{
      id: 1324,
      trackNumber: 1,
      name: 'track 1',
      channelRecordingFiles: [
        {
          id: 41,
          channelNumber: 1,
          name: 'Gesang Robin',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 43,
          channelNumber: 2,
          name: 'Gesang Beni',
          filename: '',
          type: '',
          data: null
        },
        {
          id: 45,
          channelNumber: 3,
          name: 'Gesang Silvan',
          filename: '',
          type: '',
          data: null
        }
      ]
    }]
  }
];
