import fs from "fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import parse from "csv-parse";

const parser = parse({
  delimiter: ",",
  columns: true,
  relax_column_count: true,
});
parser.on("error", (err: any) => {
  console.error(err.message);
});
parser.on("end", function () {
  // console.log(output);
});
parser.on("readable", function () {
  let record;
  while ((record = parser.read())) {
  }
});

fs.createReadStream("../../storage/uploads/code-challenge-01.csv").pipe(parser);
