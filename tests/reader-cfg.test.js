import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { loadFile } from '../src/reader-cfg.js';

describe('loadFile successful cases', () => {
    test('file loades', () => {
        const result = loadFile();
        assert.equal(result.ok, true);
    });
});