const style = document.createElement("style");
style.textContent = `
#thumbnail, .ytd-thumbnail::before, ytd-thumbnail[size="large"]::before, 
.video-stream, .rich-thumbnail, .video-thumbnail-container-vertical,
.rounded-thumbnail
{
    border-radius: 0 !important; 
}
#video-preview-container {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}
`;
document.head.append(style);