import axios from "axios";
import React, { useEffect, useState } from "react";

interface DownloadLinks {
  Windows: string | null;
  MacArm: string | null;
  MacIntel: string | null;
  LinuxDebian: string | null;
  LinuxArch: string | null;
  LinuxUniversal: string | null;
}

const DownloadLinks = ({ os }: { os: keyof DownloadLinks }) => {
  const [downloadLink, setDownloadLink] = useState<DownloadLinks>({
    Windows: null,
    MacArm: null,
    MacIntel: null,
    LinuxDebian: null,
    LinuxArch: null,
    LinuxUniversal: null,
  });

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await getLatestRelease();
      setDownloadLink(links);
    };

    fetchLinks();
  }, []);

  return (downloadLink[os] && downloadLink[os] !== null) ? <a href={downloadLink[os] as string}>get this download</a> : null;
};

async function getLatestRelease() {
  let downloadLinks = {
    Windows: null,
    MacArm: null,
    MacIntel: null,
    LinuxDebian: null,
    LinuxArch: null,
    LinuxUniversal: null,
  };

  try {
    const response = await axios.get(
      "https://api.github.com/repos/koii-network/desktop-node/releases/latest"
    );

    if (response.data.assets.length > 0) {
      if (
        response.data.assets[0] &&
        response.data.assets[0].browser_download_url.includes(".deb")
      ) {
        downloadLinks.LinuxDebian =
          response.data.assets[0].browser_download_url;
        if (
          response.data.assets[2] &&
          response.data.assets[2].browser_download_url.includes(".AppImage")
        ) {
          downloadLinks.LinuxUniversal =
            response.data.assets[2].browser_download_url;
        }
        if (
          response.data.assets[3] &&
          response.data.assets[3].browser_download_url.includes(".rpm")
        ) {
          downloadLinks.LinuxArch =
            response.data.assets[3].browser_download_url;
        }
        if (
          response.data.assets[4] &&
          response.data.assets[4].browser_download_url.includes("arm64.dmg")
        ) {
          downloadLinks.MacArm = response.data.assets[4].browser_download_url;
        }
        if (
          response.data.assets[8] &&
          response.data.assets[8].browser_download_url.includes("x64.dmg")
        ) {
          downloadLinks.MacIntel = response.data.assets[8].browser_download_url;
        }
        if (
          response.data.assets[12] &&
          response.data.assets[12].browser_download_url.includes("win")
        ) {
          downloadLinks.Windows = response.data.assets[12].browser_download_url;
        }
      }
    } else {
      console.log("No assets found in the latest release.");
    }
  } catch (error) {
    console.error(error);
  }
  return downloadLinks;
}

export { DownloadLinks };
