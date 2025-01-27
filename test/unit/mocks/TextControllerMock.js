import TextSourceBufferMock from './TextSourceBufferMock.js';

class TextControllerMock {
    constructor() {
        this.textEnabled = false;
        this.buffers = [];
    }

    getTextSourceBuffer() {
        return new TextSourceBufferMock();
    }

    isTextEnabled() {
        return this.textEnabled;
    }

    enableText(state) {
        this.textEnabled = state;
    }

    getTextDefaultEnabled() {
        return true;
    }

    addEmbeddedTrack() {
    }

    deactivateStream() {

    }

    initializeForStream() {

    }

    clearDataForStream() {
    }
}

export default TextControllerMock;
