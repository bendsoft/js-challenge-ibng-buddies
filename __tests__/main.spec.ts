import { RecordingsToFileTreeConverter } from '../src/main';

const fileTreeResult = [{
  "filename": "2017",
  "type": 0,
  "children": [{
    "filename": "3. August Aufnahme 1",
    "type": 1,
    "children": [{
      "filename": "1. track 1",
      "id": 1324,
      "type": 2,
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
  }, {
    "filename": "3. August Aufnahme 2",
    "type": 1,
    "children": [{
      "filename": "1. track 1",
      "id": 1324,
      "type": 2,
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
    "filename": "13. Oktober Aufnahme 4",
    "type": 1,
    "children": [{
      "filename": "1. track 1",
      "id": 1324,
      "type": 2,
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
  "type": 0,
  "children": [{
    "filename": "7. November Aufnahme 5",
    "type": 1,
    "children": [{
      "filename": "1. track 1",
      "id": 1324,
      "type": 2,
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
    "filename": "23. November Aufnahme 3",
    "type": 1,
    "children": [{
      "filename": "1. track 1",
      "id": 1324,
      "type": 2,
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
    expect(new RecordingsToFileTreeConverter().convert()).toEqual(fileTreeResult);
  });
});
