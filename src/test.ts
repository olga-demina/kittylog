import { kittylog } from "./index";

kittylog.info("Info...");
kittylog.success("Success...");
kittylog.warning("Warn...");
kittylog.error("Error...");
kittylog.custom("magenta", "CUSTOM", "Custom...");

kittylog.blank("dashed", "yellow");
kittylog.error(new Error("Error..."));

kittylog.blank("dashed", "yellow");
kittylog.debug("User data", { id: 1, username: "pietrodev07" });

kittylog.blank("dashed", "yellow");

const whileLoopTest = kittylog.performance("external performance test #1");

let i = 0;
while (i < 100) {
  i++;
}

whileLoopTest.end();

const forLoopTest = kittylog.performance("external performance test #2");

for (let i = 0; i < 100; i++) {}

const internalTest = kittylog.performance("internal performance test");

for (let i = 0; i < 100; i++) {}

internalTest.end();

forLoopTest.end();
