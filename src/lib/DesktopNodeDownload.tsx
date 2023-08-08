import axios from "axios";
import React, { useEffect, useState } from "react";

interface DownloadLinks {
  Windows: string;
  MacArm: string;
  MacIntel: string;
  LinuxDebian: string;
  LinuxArch: string;
  LinuxUniversal: string;
}

const DownloadLinks = ({ os }: { os: keyof DownloadLinks }) => {
  const [downloadLink, setDownloadLink] = useState<DownloadLinks>({
    Windows: "",
    MacArm: "",
    MacIntel: "",
    LinuxDebian: "",
    LinuxArch: "",
    LinuxUniversal: "",
  });

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await getLatestRelease();
      setDownloadLink(links);
    };

    fetchLinks();
  }, []);

  return downloadLink[os] ? (
    <a href={downloadLink[os]}>get this download</a>
  ) : null;
};

async function getLatestRelease() {
  let downloadLinks = {
    Windows: "",
    MacArm: "",
    MacIntel: "",
    LinuxDebian: "",
    LinuxArch: "",
    LinuxUniversal: "",
  };

  try {
    const response = await axios.get(
      "https://api.github.com/repos/koii-network/koii-node/releases/latest"
    );

    if (response.data.assets.length > 0) {
      let assetTypes = {
        ".deb": "LinuxDebian",
        ".AppImage": "LinuxUniversal",
        ".rpm": "LinuxArch",
        "mac-universal.dmg": "Mac",
        "arm64.dmg": "MacArm",
        "mac-x64.dmg": "MacIntel",
        "win-x64": "Windows",
      };

      response.data.assets.forEach((asset) => {
        let url = asset?.browser_download_url;
        if (url) {
          for (let extension in assetTypes) {
            if (url.includes(extension) && !url.includes(".blockmap")) {
              downloadLinks[assetTypes[extension]] = url;
              break;
            }
          }
        }
      });
    } else {
      console.log("No assets found in the latest release. Using backup links.");
      downloadLinks = {
        Windows:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-win.exe",
        MacArm:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-mac-arm64.dmg",
        MacIntel:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-mac-x64.dmg",
        LinuxDebian:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-linux-amd64.deb",
        LinuxArch:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-linux-x86_64.rpm",
        LinuxUniversal:
          "https://github.com/koii-network/koii-node/releases/download/v0.2.14/koii-desktop-node-0.2.14-linux-x86_64.AppImage",
      };
    }
  } catch (error) {
    console.error(error);
  }
  return downloadLinks;
}

export { DownloadLinks };
