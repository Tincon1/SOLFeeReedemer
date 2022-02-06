export type Frcnt = {
  "version": "0.1.0",
  "name": "frcnt",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "feecntrAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "count",
      "accounts": [
        {
          "name": "feecntrAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "closedAccounts",
          "type": "u64"
        },
        {
          "name": "redeemedLamports",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "feeCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "closedAccounts",
            "type": "u64"
          },
          {
            "name": "redeemedLamports",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TooManyCloses",
      "msg": "Stop messing with me!"
    }
  ]
};

export const IDL: Frcnt = {
  "version": "0.1.0",
  "name": "frcnt",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "feecntrAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "count",
      "accounts": [
        {
          "name": "feecntrAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "closedAccounts",
          "type": "u64"
        },
        {
          "name": "redeemedLamports",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "feeCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "closedAccounts",
            "type": "u64"
          },
          {
            "name": "redeemedLamports",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TooManyCloses",
      "msg": "Stop messing with me!"
    }
  ]
};
