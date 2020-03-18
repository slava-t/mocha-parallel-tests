"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function supportsWorkerThreads() {
    const useProcessesEnvVar = (process.env.USE_PROCESSES || '').toLowerCase();
    if (['true', '1', 'yes', 'y'].indexOf(useProcessesEnvVar) > -1) {
        return false;
    }
    try {
        require('worker_threads');
        return true;
    }
    catch (ex) {
        return false;
    }
}
exports.supportsWorkerThreads = supportsWorkerThreads;
//# sourceMappingURL=thread.js.map