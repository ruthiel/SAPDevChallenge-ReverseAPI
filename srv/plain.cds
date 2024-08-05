@protocol: [{ kind: 'rest', path: 'plain' }]
service Plain {
    @open
    action highestValue(input: array of Int32) returns Int32;
}
