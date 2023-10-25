import React, { useEffect } from "react";

type HiddenTreasureType = {
  text: string;
};

function HiddenTreasure({ text }: HiddenTreasureType) {
  useEffect(() => {
    console.log("🎏🏴‍☠️🎏 Hidden treasure? One more step to go! 🎏🏴‍☠️🎏");
    console.log(
      "IPFS CID: bafybeigw2avjagjxr6b43ia6nmhodusoa4fdazlqguxhfe3voudxeexofe"
    );
  }, []);

  return <></>;
}

export default HiddenTreasure;
