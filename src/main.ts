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
    this.orderByDateAscThenIdDesc(recordings);

    const recordingsPerYear = {};
    recordings.forEach(recording => {
      const yearKey = this.toDate(recording.date)
        .getFullYear()
        .toString();
      recordingsPerYear[yearKey] = recordingsPerYear[yearKey] || [];
      recordingsPerYear[yearKey].push(recording);
    });

    return Object.keys(recordingsPerYear).map(year => {
      return {
        filename: year,
        type: 0,
        children: recordingsPerYear[year].map(recording => {
          const formatted = this.formatDate(this.toDate(recording.date));

          return {
            type: 1,
            filename: `${formatted} ${recording.name}`,
            children: recording.tracks.map(track => {
              return {
                type: 2,
                filename: `${track.trackNumber}. ${track.name}`,
                id: track.id,
                children: track.channels.map(channel => {
                  return {
                    filename: channel.name,
                    file: {
                      ...channel
                    },
                  };
                }),
              };
            }),
          };
        }),
      };
    });
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

  // tslint:disable-next-line:no-shadowed-variable
  private orderByDateAscThenIdDesc(recordings: RecordingModel[]) {
    return recordings.sort((a, b) => {
      const dateA = this.toDate(a.date).valueOf();
      const dateB = this.toDate(b.date).valueOf();

      const byDate = dateA - dateB;

      return byDate || b.id - a.id
    });
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
