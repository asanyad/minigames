class Renderer {
    constructor(numberOfButtonsToFitWindowWidth, textResizeFactor, videoResizeFactor) {
        this.videoResizeFactor = videoResizeFactor;
        this.numberOfButtonsToFitWindowWidth = numberOfButtonsToFitWindowWidth;
        this.textResizeFactor = textResizeFactor;
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.backImageLandscapePath = imagePaths.backImageLandscapePath;
        this.backImagePortraitPath = imagePaths.backImagePortraitPath;
        this.renderRatio = this.windowWidth / this.numberOfButtonsToFitWindowWidth;
        this.numberOfAllButtons = 2;
        this.buttonWidthFactor = 0.8;
        this.buttonHeightFactor = 0.4;
        this.buttonFontSizeFactor = 1 / 9.5;
        this.buttonBorderSizeFactor = 1 / 200;
        this.h1SizeFactor = 0.2;
        this.h2SizeFactor = 0.16;
        this.pSizeFactor = 0.12;
    }

    render() {
        this.menu_and_content = document.getElementById('menu_and_content').style;
        this.content = document.getElementById('content').style;
        this.menu = document.getElementById('menu').style;
        this.menuButtons = document.getElementsByClassName('menuButtons');
        this.setBackground();
        this.setMenuButtons();
        this.setNoStickyContent();
        this.setFooter();
        this.setFontSizes();
        this.setLeftRighters();
        this.setVideos();
    }

    setBackground() {
        document.body.style.backgroundSize = this.windowWidth + 'px ' + this.windowHeight + 'px';
    }

    setMenuButtons() {
        this.buttonWidth = parseInt(this.renderRatio * this.buttonWidthFactor) + 'px';
        this.buttonHeight = parseInt(this.renderRatio * this.buttonHeightFactor) + 'px';
        this.buttonFontSize = parseInt(this.renderRatio * this.buttonFontSizeFactor) + 'px';
        this.buttonBorderSize = parseInt(this.windowWidth * this.buttonBorderSizeFactor) + 'px';
        for (var i = 0; i < this.menuButtons.length; i++) {
            var actButtonStyle = this.menuButtons[i].style;
            actButtonStyle.width = this.buttonWidth;
            actButtonStyle.height = this.buttonHeight;
            actButtonStyle.fontSize = this.buttonFontSize;
            actButtonStyle.lineHeight = this.buttonHeight;
            actButtonStyle.verticalAlign = 'middle';
            actButtonStyle.borderWidth = this.buttonBorderSize;
        }
    }

    setNoStickyContent() {
        this.stickyTopHeight = document.getElementById('stickyTop').clientHeight;
        var nosticky = document.getElementById('nosticky');
        nosticky.style.top = this.stickyTopHeight + 'px';
    }	

    setFooter() {
        this.stickyBottom = document.getElementById('stickyBottom').style;
    }

    setFontSizes() {
        var padding = '2%';
        var h1Tags = document.getElementsByClassName("contentTitle");
        var h1FontSize = parseInt(this.renderRatio * this.h1SizeFactor * this.textResizeFactor) + 'px';
        for (var i = 0; i < h1Tags.length; i++) {
            var h1TagStyle = h1Tags[i].style;
            h1TagStyle.fontSize = h1FontSize;
            h1TagStyle.paddingLeft = padding;
            h1TagStyle.paddingRight = padding;
        }
        var h2Tags = document.getElementsByClassName("contentSubtitle");
        var h2FontSize = parseInt(this.renderRatio * this.h2SizeFactor * this.textResizeFactor) + 'px';
        for (var i = 0; i < h2Tags.length; i++) {
            var h2TagStyle = h2Tags[i].style;
            h2TagStyle.fontSize = h2FontSize;
            h2TagStyle.paddingLeft = padding;
            h2TagStyle.paddingRight = padding;
        }
        var pTags = document.getElementsByClassName("contentText");
        var pFontSize = parseInt(this.renderRatio * this.pSizeFactor * this.textResizeFactor) + 'px';
        for (var i = 0; i < pTags.length; i++) {
            var pTagStyle = pTags[i].style;
            pTagStyle.fontSize = pFontSize;
            pTagStyle.paddingLeft = padding;
            pTagStyle.paddingRight = padding;
        }
    }
    
    setLeftRighters(){
        this.images = document.getElementsByClassName("images");
        this.lefters = document.getElementsByClassName("leftRighters");
        this.lefters = document.getElementsByClassName("lefters");
        this.righters = document.getElementsByClassName("righters");
    }
    
    setVideos(){
        this.videos = document.getElementsByClassName("video");
        var width = parseInt(this.windowWidth * this.videoResizeFactor);
        var height = parseInt(width * 9 / 16);
        for (var i = 0; i < this.videos.length; i++){
            this.videos[i].style.width = width + 'px';
            this.videos[i].style.height = height + 'px';
            
        }
    }
}

class LandscapeRenderer extends Renderer {
    constructor(textResizeFactor, videoResizeFactor) {
        super(9, textResizeFactor, videoResizeFactor);
        this.contentWidthFactor = 7.5;
    }

    setBackground() {
        super.setBackground();
        document.body.style.backgroundImage = 'url(' + this.backImageLandscapePath + ')';
    }

    setMenuButtons() {
        super.setMenuButtons();
        for (var i = 0; i < this.menuButtons.length; i++) {
            this.menuButtons[i].style.display = 'block';
        }
        this.menu.width = parseInt(this.renderRatio) + 'px';
        this.menu.height = '100%';
        this.content.left = parseInt(this.renderRatio) + 'px';
        this.content.top = '0px';
        this.content.width = parseInt(this.renderRatio * this.contentWidthFactor) + 'px';
        this.content.marginTop = '0px';
    }	

    setFooter() {
        super.setFooter();
        this.stickyBottom.left = '0px';
        this.stickyBottom.width = '100%';
        this.stickyBottom.left = this.menu.width;
        this.stickyBottom.right = this.windowWidth;
    }
    
    setLeftRighters(){
        super.setLeftRighters();
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.width = '90%';
            this.images[i].style.height = '90%';
        }
        
        for (var i = 0; i < this.lefters.length; i++){
            this.lefters[i].style.width = '70%';
            
        }
        for (var i = 0; i < this.righters.length; i++){
            this.righters[i].style.width = '25%';
        }
    }
}

class PortraitRenderer extends Renderer {
    constructor(numberOfButtonsToFitWindowWidth, textResizeFactor, videoResizeFactor) {
        super(numberOfButtonsToFitWindowWidth, textResizeFactor, videoResizeFactor);
        this.numberOfRowsForButtons = this.numberOfAllButtons / this.numberOfButtonsToFitWindowWidth;
    }

    setBackground() {
        super.setBackground();
        document.body.style.backgroundImage = 'url(' + this.backImagePortraitPath + ')';
    }

    setMenuButtons() {
        super.setMenuButtons();
        for (var i = 0; i < this.menuButtons.length; i++) {
            this.menuButtons[i].style.display = 'inline-block';
        }
        this.menu.width = '100%';
        this.menu.height = 'auto';
        this.menu.top = this.stickyTopHeight + 'px';
        var contentTop = parseInt(this.numberOfRowsForButtons * this.renderRatio * this.buttonHeightFactor) + 'px';
        this.content.top = contentTop;
        this.content.left = '0px';
        this.content.width = 'auto';
        this.content.marginTop = this.buttonHeight;
    }	

    setFooter() {
        super.setFooter();
        this.stickyBottom.left = '0px';
        this.stickyBottom.width = '100%';
    }
    
    setLeftRighters(){
        super.setLeftRighters();
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.width = '70%';
            this.images[i].style.height = '70%';
        }
        
        for (var i = 0; i < this.lefters.length; i++){
            this.lefters[i].style.width = '100%';
            
        }
        for (var i = 0; i < this.righters.length; i++){
            this.righters[i].style.width = '100%';
        }
    }
}

function render() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var landscape = windowWidth > windowHeight;
    var isAndroid = isSiteDisplayedOnAndroid();
    var textResizeFactor = isAndroid ? 1.17 : 1;
    var videoResizeFactor = landscape ? 0.5 : 0.9;
    var numberOfButtonsToFitWindowWidth = isAndroid ? 2 : 4;

    var renderer;
    if (landscape) {
        renderer = new LandscapeRenderer(textResizeFactor, videoResizeFactor);
    } else {
        renderer = new PortraitRenderer(numberOfButtonsToFitWindowWidth, textResizeFactor, videoResizeFactor);
    }
    renderer.render();
}

function isSiteDisplayedOnAndroid() {
    return navigator.userAgent.match(/Android/i);
}

window.onload = function () {
    render();
};

window.onresize = function () {
    render();
};
