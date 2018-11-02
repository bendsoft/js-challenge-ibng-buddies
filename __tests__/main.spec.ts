import { recordingsToFileTreeConverter } from '../src/main';

const fileTreeResult = [{
  "filename": "2017",
  "isRecording": false,
  "children": [{
    "filename": "3. August",
    "isRecording": false,
    "children": [{
      "filename": "Aufnahme 1",
      "id": 566776,
      "isRecording": true,
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
    }, {
      "filename": "Aufnahme 2",
      "id": 566776,
      "isRecording": true,
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
  }, {
    "filename": "13. Oktober",
    "isRecording": false,
    "children": [{
      "filename": "Aufnahme 4",
      "id": 7989879,
      "isRecording": true,
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
  }]
}, {
  "filename": "2018",
  "isRecording": false,
  "children": [{
    "filename": "23. November",
    "isRecording": false,
    "children": [{
      "filename": "Aufnahme 3",
      "id": 2342134,
      "isRecording": true,
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
  }]
}];

describe('list of recording given', () => {
  it('should transform it into a file-tree', () => {
    expect(recordingsToFileTreeConverter()).toEqual(fileTreeResult);
  });
});
