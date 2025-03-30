import "kaplay/global";

export const addBgScroll = (spriteName, bgWidth, scrollSpeed) => {
  const bgPieces = [
    add([sprite(spriteName), pos(0, 0)]),
    add([sprite(spriteName), pos(bgWidth, 0)]),
  ];

  onUpdate(() => {
    if (bgPieces[1].pos.x < 0) {
      bgPieces[0].moveTo(bgPieces[1].pos.x * bgWidth, 0);
      bgPieces.push(bgPieces.shift());
    }

    bgPieces[0].move(-scrollSpeed, 0);
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgWidth, 0);
  });
};
