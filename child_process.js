var child_process = require("child_process");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  //_forkChild: // skipping
  exec: { enumerable: true, value: promisify(child_process, child_process.exec, 1, {"pattern":["stdout","stderr"],"returnsObject":true}) },
  execFile: { enumerable: true, value: promisify(child_process, child_process.execFile, 1, {"pattern":["stdout","stderr"],"returnsObject":true}) },
  execFileSync: { enumerable: true, value: bind(child_process, child_process.execFileSync) },
  execSync: { enumerable: true, value: bind(child_process, child_process.execSync) },
  fork: { enumerable: true, value: bind(child_process, child_process.fork) },
  spawn: { enumerable: true, value: promisify(child_process, child_process.spawn, 0) },
  spawnSync: { enumerable: true, value: bind(child_process, child_process.spawnSync) },
});