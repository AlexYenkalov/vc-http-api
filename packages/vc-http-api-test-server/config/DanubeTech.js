module.exports = {
    name: "Danube Tech",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6Mkqf7nLJsKmHnr5tKkLsCn25BmCQCSPPCn6cvr7ZSerAtp",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6Mkqf7nLJsKmHnr5tKkLsCn25BmCQCSPPCn6cvr7ZSerAtp#z6Mkqf7nLJsKmHnr5tKkLsCn25BmCQCSPPCn6cvr7ZSerAtp"
            }
        },
        {
            id: "did:sov:danube:MQ5WYVUsciSd55zXMgYWpM",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:sov:danube:MQ5WYVUsciSd55zXMgYWpM#key-1"
            }
        },
        {
            id: "did:v1:test:nym:z6MkwHPHHoKW14LNWpGh2L9J8beekUsoihq7NYmAVqCT5H2o",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkwHPHHoKW14LNWpGh2L9J8beekUsoihq7NYmAVqCT5H2o#z6Mkfhq6Aiq9TBYvm6j2Do4zshhAkhp3tN9xe7xP8yhuSSXM"
            }
        },
        {
            id: "did:web:did-web.uniregistrar.io:uscis",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:web:did-web.uniregistrar.io:uscis#z6Mkpg9GarVada9ycNVnYEKG7kNyh7QTYy4Znu6Kyoi2ZseG"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://univerifier.io/1.0/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:sov:", "did:v1:test:nym:", "did:web:", "did:ion:", "did:btcr:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://univerifier.io/1.0/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: verifiableCredentials = require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
