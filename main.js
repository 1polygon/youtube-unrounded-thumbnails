const style = document.createElement("style");
style.textContent = `
#thumbnail, .ytd-thumbnail::before, ytd-thumbnail[size="large"]::before, 
.video-stream, .rich-thumbnail, .video-thumbnail-container-vertical,
.rounded-thumbnail, #ytd-player, #player-container, 
.ytd-reel-player-overlay-renderer, .player-container.ytd-reel-video-renderer, .reel-video-in-sequence-thumbnail,
.shortsLockupViewModelHostThumbnailContainer, .ytd-video-preview
{
    border-radius: 0 !important; 
}
#video-preview-container {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}
`;
document.head.append(style);