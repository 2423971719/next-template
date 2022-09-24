/*
 * @Author: W·S
 * @Date: 2022-09-17 11:12:44
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-20 13:04:05
 * @Description: Description
 */

import type { Fields, File } from "formidable";

import FS from "fs";
import Path from "path";
import compressing from "compressing";
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const suffixs = ["bzsc.zip"];
  const fData: { fields: Fields; files: { file: File } } = await new Promise(
    (resolve, reject) => {
      const form = new IncomingForm({
        multiples: true,
        uploadDir: Path.join("./", "public"),
        keepExtensions: true,
      });
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files } as {
          fields: Fields;
          files: { file: File };
        });
      });
    }
  );

  if (fData.files.file instanceof Array) {
    for (let index = 0; index < fData.files.file.length; index++)
      unlinkSync(fData.files.file[index].newFilename);
    return res.status(200).json({
      code: -1,
      message: "验证失败!",
      file: fData.files.file,
    });
  }

  if (
    fData.fields.data !== "pass9527" ||
    suffixs.indexOf(fData.files.file.originalFilename as string) < 0
  ) {
    unlinkSync(fData.files.file.newFilename);
    return res.status(200).json({
      code: -1,
      message: "验证失败!",
      file: fData.files.file,
    });
  }

  const suffix = suffixs[
    suffixs.indexOf(fData.files.file.originalFilename as string)
  ].replace(".zip", "");

  const nameSpace =
    suffix +
    "-" +
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate() +
    "-" +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ".zip";

  unlinkSync(nameSpace);

  const toZIPRes = await toZIP(suffix, nameSpace);
  const unZIPRes = await unZIP(fData.files.file.newFilename, "");

  unlinkSync(fData.files.file.newFilename);

  if (!toZIPRes)
    return res.status(200).json(sendMessage(-1, "压缩备份文件失败", nameSpace));

  if (!unZIPRes) {
    unlinkSync(nameSpace);
    return res.status(200).json(sendMessage(-1, "解压文件失败", nameSpace));
  }

  return res.status(200).json({
    code: 0,
    message: "部署成功!",
    backFiles: nameSpace,
  });
};

export default upload;

function sendMessage(code: number, str: string, backFiles: string) {
  return {
    code,
    message: str + ",请重新上传,如超过三次失败请联系运维人员手动部署!",
    backFiles,
  };
}

function unlinkSync(path: string) {
  if (FS.existsSync(Path.join("./public/", path)))
    FS.unlinkSync(Path.join("./public/", path));
}

function unZIP(path: string, topath: string) {
  return new Promise((resolve) => {
    compressing.zip
      .uncompress(
        Path.join("./public/", path),
        Path.join("./public/", topath),
        {
          zipFileNameEncoding: "GBK",
        }
      )
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
}

async function toZIP(path: string, topath: string) {
  return new Promise((resolve) => {
    compressing.zip
      .compressDir(
        Path.join("./public/", path),
        Path.join("./public/", topath),
        {
          zipFileNameEncoding: "GBK",
        }
      )
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
}
