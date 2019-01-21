import {RecordingsToFileTreeConverter} from '../src/main';

const fileTreeResult = [
  {
    "filename": "2018",
    "folderType": 0,
    "children": [{
      "filename": "13. August Aufnahme 4",
      "folderType": 1,
      "children": [{
        "filename": "1. track 1",
        "id": 1324,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 41,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 43,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 45,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }]
    }, {
      "filename": "3. Januar Aufnahme 2",
      "folderType": 1,
      "children": [{
        "filename": "1. track 1",
        "id": 1324,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 21,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 23,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 25,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }]
    }]
  }, {
    "filename": "2017",
    "folderType": 0,
    "children": [{
      "filename": "23. November Aufnahme 3",
      "folderType": 1,
      "children": [{
        "filename": "1. track 1",
        "id": 1324,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 31,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 33,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 35,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }]
    }, {
      "filename": "7. November Aufnahme 5",
      "folderType": 1,
      "children": [{
        "filename": "1. track 1",
        "id": 1329,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 31,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 33,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 35,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }, {
        "filename": "2. track 2",
        "id": 1325,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Beni",
          "file": {
            "id": 33,
            "channelNr": 1,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Robin",
          "file": {
            "id": 31,
            "channelNr": 2,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 35,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }, {
        "filename": "3. track 3",
        "id": 1324,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 31,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 33,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 35,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }]
    }, {
      "filename": "3. August Aufnahme 1",
      "folderType": 1,
      "children": [{
        "filename": "1. track 1",
        "id": 1324,
        "folderType": 2,
        "children": [{
          "filename": "Gesang Robin",
          "file": {
            "id": 11,
            "channelNr": 1,
            "name": "Gesang Robin",
            "size": 2345345
          }
        }, {
          "filename": "Gesang Beni",
          "file": {
            "id": 13,
            "channelNr": 2,
            "name": "Gesang Beni",
            "size": 243233
          }
        }, {
          "filename": "Gesang Silvan",
          "file": {
            "id": 15,
            "channelNr": 3,
            "name": "Gesang Silvan",
            "size": 987987
          }
        }]
      }]
    }]
  }
];

describe('list of recording given', () => {
  const convertedToFileTree = RecordingsToFileTreeConverter.convert();

  it('should transform it into a file-tree', () => {
    expect(convertedToFileTree).toEqual(fileTreeResult);
  });

  it('should sort years descending', () => {
    // @ts-ignore
    expect(convertedToFileTree[0].filename).toEqual('2018');
  });

  it('should format Date and Recording name for second node', () => {
    // @ts-ignore
    expect(convertedToFileTree[0].children[0].filename).toEqual('13. August Aufnahme 4');
  });

  it('should sort recordings by date descending', () => {
    // @ts-ignore
    expect(convertedToFileTree[0].children[1].filename).toEqual('3. Januar Aufnahme 2');
  });

  it('should sort tracks by track number ascending', () => {
    // @ts-ignore
    expect(convertedToFileTree[1].children[1].children[0].filename).toEqual('1. track 1');
  });

  it('should sort channels by channel number ascending', () => {
    // @ts-ignore
    expect(convertedToFileTree[1].children[1].children[0].children[1].filename).toEqual('Gesang Beni');
  });
});
