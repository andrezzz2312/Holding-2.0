// Variables
const loop = document.getElementById('loopvideo')
const loopContainer = document.getElementById('loop')
const videoHolder = document.querySelector('#videoHolder')
let video1 = ''
let video2 = ''
let video3 = ''
let textContent = ''
let label = ''
let paragraph = ''
let line = ''
let svg1 = ''
let circle = ''
let backButton = ''
let backButtonContainer = ''
let containVideoWidth = ''
let containVideoHeight = ''
let video1check = false
let video2check = false
let video3check = false
let x = window.matchMedia('(max-height: 550px)')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
let details = navigator.userAgent
let regexp = /android|iphone|kindle|ipad/i
let ios = /iphone|ipad/i
let macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
let isMobileDevice = regexp.test(details)
let isIOS = ios.test(details)
let isMac = macosPlatforms.test(details)

if (!isMobileDevice) {
  fullscreen_button.style.display = 'none'
} else {
  if (isIOS) {
    fullscreen_button.style.display = 'none'
  }
}
if (isMac) {
  alertdiv.style.display = 'flex'
}
// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
  videoToPause.pause()
  videoToVanish.classList.add('short-vanish')
  setTimeout(() => {
    videoToPlay.play()
  }, 500)
}

// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
  mainButtons.classList.toggle('show')
  mainButtons.classList.toggle('disabled')
  mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
  showCont.classList.remove('hidden')
  showCont.classList.toggle('short-vanish')
  showCont.classList.toggle('show')
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
  if (source1) {
    video1 = document.createElement('video')
    video1.src = source1
    video1.setAttribute('muted', '')
    video1.setAttribute('playsinline', '')
    video1.setAttribute('poster', '')
    video1.controls = false
    video1.autoplay = 'true'
    video1.classList.add('video')
    video1.style.zIndex = '-2'
    video1.pause()
    loopContainer.appendChild(video1)
  }
  if (source2) {
    video2 = document.createElement('video')
    video2.src = source2
    video2.loop = true
    video2.setAttribute('muted', '')
    video2.setAttribute('playsinline', '')
    video2.setAttribute('poster', '')
    video2.controls = false
    video2.autoplay = 'true'
    video2.classList.add('video')
    video2.style.zIndex = '-3'
    video2.pause()
    loopContainer.appendChild(video2)
  }
  if (source3) {
    video3 = document.createElement('video')
    video3.src = source3
    video3.setAttribute('muted', '')
    video3.autoplay = 'true'
    video3.setAttribute('playsinline', '')
    video3.setAttribute('poster', '')
    video3.controls = false
    video3.classList.add('video')
    video3.style.zIndex = '-4'
    video3.pause()
    loopContainer.appendChild(video3)
  }
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(
  textLeft,
  textTop,
  labelTitle,
  pContent,
  pContentId,
  textId,
  labelId
) {
  const svgContainerMade = document.createElement('div')
  svgContainerMade.classList.add('svgContainer')
  svgContainerMade.style.width = containVideoWidth + 'px'
  svgContainerMade.style.height = containVideoHeight + 'px'
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  centerContainerMade.setAttribute('id', 'centerContainer_text')
  const textContainerMade = document.createElement('div')
  textContainerMade.classList.add('textContainer')
  textContainerMade.style.width = containVideoWidth + 'px'
  textContainerMade.style.height = containVideoHeight + 'px'

  textContent = document.createElement('div')
  textContent.setAttribute('id', textId ? textId : '')
  textContent.classList.add('text')
  textContent.style.left = textLeft
  textContent.style.top = textTop

  const labelCont = document.createElement('div')
  labelCont.setAttribute('id', labelId ? labelId : '')
  labelCont.classList.add('labelCont')

  const pCont = document.createElement('div')
  pCont.classList.add('pCont')
  pCont.setAttribute('id', pContentId ? pContentId : 'a')

  showCont.appendChild(textContent)

  label = document.createElement('label')
  label.classList.add('label')
  label.textContent = labelTitle

  paragraph = document.createElement('p')
  paragraph.textContent = pContent

  let fontvar = `calc(4px + (17 - 4) * ((${
    containVideoWidth + 'px'
  } - 320px) / (1440 - 320)))`
  label.style.fontSize = fontvar
  paragraph.style.fontSize = fontvar

  showCont.appendChild(centerContainerMade)

  centerContainerMade.appendChild(textContainerMade)
  textContainerMade.appendChild(textContent)
  textContent.appendChild(labelCont)
  textContent.appendChild(pCont)
  labelCont.appendChild(label)
  pCont.appendChild(paragraph)
}

// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function createSvg(lx1, ly1, lx2, ly2) {
  const svgContainerMade = document.createElement('div')
  svgContainerMade.classList.add('svgContainer')
  svgContainerMade.style.width = containVideoWidth + 'px'
  svgContainerMade.style.height = containVideoHeight + 'px'
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  centerContainerMade.setAttribute('id', 'centerContainer_svg')

  showCont.appendChild(centerContainerMade)
  centerContainerMade.appendChild(svgContainerMade)

  svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  svg1.setAttribute('width', '100%')
  svg1.setAttribute('height', '100%')
  svg1.classList.add('svg')

  line = document.createElementNS('http://www.w3.org/2000/svg', 'line')

  line.setAttribute('x1', lx1)
  line.setAttribute('y1', ly1)
  line.setAttribute('x2', lx2)
  line.setAttribute('y2', ly2)
  line.setAttribute('stroke', '#f04923')

  svg1.appendChild(line)

  circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

  circle.setAttribute('cx', lx2)
  circle.setAttribute('cy', ly2)
  circle.setAttribute('r', '6px')
  circle.setAttribute('fill', '#f04923')
  circle.classList.add('svgDot')
  svg1.appendChild(circle)

  svgContainerMade.appendChild(svg1)
}

function setFontSizes() {
  const test = document.querySelectorAll('.button')

  let fontvar = `calc(4px + (17 - 4) * ((${
    containVideoWidth + 'px'
  } - 320px) / (1440 - 320)))`

  for (let i = 0; i < test.length; i++) {
    test[i].style.fontSize = fontvar
  }

  viewR_button.style.fontSize = fontvar
}

function createBackButton() {
  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  centerContainerMade.setAttribute('id', 'centerContainer_backButton')
  const buttonContainerMade = document.createElement('div')
  buttonContainerMade.classList.add('buttonContainer')
  buttonContainerMade.style.width = containVideoWidth + 'px'
  buttonContainerMade.style.height = containVideoHeight + 'px'
  backButton = document.createElement('button')
  let fontvar = `calc(4px + (17 - 4) * ((${
    containVideoWidth + 'px'
  } - 320px) / (1440 - 320)))`
  backButton.style.fontSize = fontvar
  backButton.classList.add('viewR_a')
  backButton.textContent = 'Back to Features'
  backButtonContainer = document.createElement('div')
  backButtonContainer.classList.add('viewR_container')
  showCont.appendChild(centerContainerMade)
  centerContainerMade.append(buttonContainerMade)
  buttonContainerMade.appendChild(backButtonContainer)
  backButtonContainer.appendChild(backButton)

  backButton.addEventListener('click', function () {
    ArreglarLineas()

    backButton.style.pointerEvents = 'none'
    InterpolateVideo(video2, video2, video3)
    HideShowCont()
    loop.style.zIndex = '-5'
    loop.classList.remove('short-vanish')
    loop.currentTime = 0
    loop.pause()
    video3.addEventListener('ended', () => {
      video3.classList.add('short-vanish')
      loop.play()
      HideShowMainButtons()
      setTimeout(() => {
        loop.style.zIndex = '-1'
        video1.remove()
        video2.remove()
        video3.remove()
        showCont.innerHTML = ''
      }, 300)
    })
  })
}

function ArreglarLineas() {
  for (let i = 0; i < svgContainer.length; i++) {
    svgContainer[i].style.width = containVideoWidth + 'px'
    svgContainer[i].style.height = containVideoHeight + 'px'
  }
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.width = containVideoWidth + 'px'
    buttonContainer[i].style.height = containVideoHeight + 'px'
  }
  // mainButtons.style.opacity = '0'
  if (!mainButtons.classList.contains('disabled')) {
    mainButtons.classList.add('show')
  }
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
  var oRatio = width / height,
    cRatio = cWidth / cHeight
  return function () {
    if (contains ? oRatio > cRatio : oRatio < cRatio) {
      this.width = cWidth
      this.height = cWidth / oRatio
    } else {
      this.width = cHeight * oRatio
      this.height = cHeight
    }
    this.left = (cWidth - this.width) * (pos / 100)
    this.right = this.width + this.left
    return this
  }.call({})
}

function getImgSizeInfo(img) {
  var pos = window
    .getComputedStyle(img)
    .getPropertyValue('object-position')
    .split(' ')
  return getRenderedSize(
    true,
    img.offsetWidth,
    img.offsetHeight,
    img.videoWidth,
    img.videoHeight,
    parseInt(pos[0])
  )
}

loop.addEventListener('loadedmetadata', function (e) {
  containVideoWidth = getImgSizeInfo(loop).width
  containVideoHeight = getImgSizeInfo(loop).height

  setFontSizes()

  ArreglarLineas()

  initial.classList.add('short-vanish')
  setTimeout(() => {
    initial.style.zIndex = '-200'
  }, 500)
})

if (loop.readyState >= 1) {
  containVideoWidth = getImgSizeInfo(loop).width
  containVideoHeight = getImgSizeInfo(loop).height
  ArreglarLineas()

  initial.classList.add('short-vanish')
  setTimeout(() => {
    initial.style.zIndex = '-200'
  }, 500)
}

window.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(max-width: 420px)').matches) {
    if (window.matchMedia('(orientation: portrait)').matches) {
      warningText.innerHTML =
        ' Use the device in landscape mode in order to properly use this website'
      warning.style.opacity = '1'
      warning.style.zIndex = '300'
    }
  }
})

window.addEventListener('resize', function () {
  if (loop.readyState >= 1) {
    containVideoWidth = getImgSizeInfo(loop).width
    containVideoHeight = getImgSizeInfo(loop).height

    setFontSizes()

    if (!mainButtons.classList.contains('disabled')) {
      ArreglarLineas()
    }
  }
  if (window.matchMedia('(max-width: 420px)').matches) {
    if (window.matchMedia('(orientation: portrait)').matches) {
      warningText.innerHTML =
        ' Use the device in landscape mode in order to properly use this website'
      warning.style.opacity = '1'
      warning.style.zIndex = '300'
    }
  } else {
    if (window.matchMedia('(orientation: landscape)').matches) {
      warning.style.opacity = '0'
      warning.style.zIndex = '-100'
      window.scrollTo(0, document.body.scrollHeight)
    }
  }
})

////////// Event Listeners for the main buttons //////////
fullscreen_button.addEventListener('click', function (e) {
  expand.classList.toggle('disabledb')
  contract.classList.toggle('disabledb')

  if (!document.fullscreenElement) {
    mainContainer.webkitRequestFullscreen()
    mainContainer.webkitEnterFullscreen()
    mainContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
    document.webkitExitFullscreen()
  }
})

compactFP_button.addEventListener('click', function (e) {
  console.time('test1')
  HideShowMainButtons()

  if (x.matches) {
    createVideos(
      'assets/compactFP/compactFP_C1.mp4',
      'assets/compactFP/compactFP_C2.mp4',
      'assets/compactFP/compactFP_C3.mp4'
    )
  } else {
    createVideos(
      'assets/compactFP/compactFP1.mp4',
      'assets/compactFP/compactFP2.mp4',
      'assets/compactFP/compactFP3.mp4'
    )
  }

  createContent(
    '10%',
    '17%',
    'Compact Footprint',
    'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift.'
  )

  createSvg('21%', '19%', '49%', '42.7%')

  createBackButton()

  window.addEventListener('resize', function (e) {
    if (showCont.hasChildNodes()) {
      const textContainer = document.querySelector('#centerContainer_text')
      const svgContainer = document.querySelector('#centerContainer_svg')
      const backButtonContainer = document.querySelector(
        '#centerContainer_backButton'
      )
      textContainer.remove()
      svgContainer.remove()
      backButtonContainer.remove()
      createContent(
        '10%',
        '17%',
        'Compact Footprint',
        'Smallest, fully contained, palletizing unit\nfor a single pallet and load/unload\nfunction utlizing a pallet jack or forklift.'
      )
      createSvg('21%', '19%', '49%', '42.7%')
      createBackButton()
    }
  })

  check1()

  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        console.timeEnd('test1')
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
          })
        }, 1000)
      }
    }
  }
})

remoteAC_button.addEventListener('click', function (e) {
  HideShowMainButtons()

  if (x.matches) {
    createVideos(
      'assets/remoteAC-quickC/remoteAC_C1.mp4',
      'assets/remoteAC-quickC/remoteAC_C2.mp4',
      'assets/remoteAC-quickC/remoteAC_C3.mp4'
    )
  } else {
    createVideos(
      'assets/remoteAC-quickC/remoteAC1.mp4',
      'assets/remoteAC-quickC/remoteAC2.mp4',
      'assets/remoteAC-quickC/remoteAC3.mp4'
    )
  }

  createContent(
    '12%',
    '24%',
    'Remote Access Capability',
    `Allows Pearson's support team on-demand\naccess to the equipment's PLC and HMI\nthrough a secure VPN connection via an eWON\nrouter ISECOM STAR and ISO 27001 certified\nto support emergency troubleshooting and\nreduce on-site visits`,
    'remoteAC_p'
  )

  createSvg('15%', '27%', '60%', '25%')

  createBackButton()

  window.addEventListener('resize', function (e) {
    if (showCont.hasChildNodes()) {
      const textContainer = document.querySelector('#centerContainer_text')
      const svgContainer = document.querySelector('#centerContainer_svg')
      const backButtonContainer = document.querySelector(
        '#centerContainer_backButton'
      )
      textContainer.remove()
      svgContainer.remove()
      backButtonContainer.remove()
      createContent(
        '12%',
        '24%',
        'Remote Access Capability',
        `Allows Pearson's support team on-demand\naccess to the equipment's PLC and HMI\nthrough a secure VPN connection via an eWON\nrouter ISECOM STAR and ISO 27001 certified\nto support emergency troubleshooting and\nreduce on-site visits`,
        'remoteAC_p'
      )
      createSvg('15%', '27%', '60%', '25%')
      createBackButton()
    }
  })

  check1()
  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
          })
        }, 500)
      }
    }
  }
})

quickC_button.addEventListener('click', function (e) {
  console.time('test3')
  HideShowMainButtons()

  if (x.matches) {
    createVideos(
      'assets/remoteAC-quickC/remoteAC_C1.mp4',
      'assets/remoteAC-quickC/remoteAC_C2.mp4',
      'assets/remoteAC-quickC/remoteAC_C3.mp4'
    )
  } else {
    createVideos(
      'assets/remoteAC-quickC/remoteAC1.mp4',
      'assets/remoteAC-quickC/remoteAC2.mp4',
      'assets/remoteAC-quickC/remoteAC3.mp4'
    )
  }
  if (x.matches) {
    createContent(
      '12%',
      '20%',
      'Quick Changeover',
      `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
      'quickC_p'
    )
    createSvg('19%', '24%', '60%', '25%')

    window.addEventListener('resize', function (e) {
      if (showCont.hasChildNodes()) {
        const textContainer = document.querySelector('#centerContainer_text')
        const svgContainer = document.querySelector('#centerContainer_svg')
        const backButtonContainer = document.querySelector(
          '#centerContainer_backButton'
        )
        textContainer.remove()
        svgContainer.remove()
        backButtonContainer.remove()
        createContent(
          '12%',
          '20%',
          'Quick Changeover',
          `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
          'quickC_p'
        )
        createSvg('19%', '24%', '60%', '25%')
        createBackButton()
      }
    })
  } else {
    createContent(
      '12%',
      '30%',
      'Quick Changeover',
      `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
      'quickC_p'
    )
    createSvg('19%', '34%', '60%', '25%')
    window.addEventListener('resize', function (e) {
      if (showCont.hasChildNodes()) {
        const textContainer = document.querySelector('#centerContainer_text')
        const svgContainer = document.querySelector('#centerContainer_svg')
        const backButtonContainer = document.querySelector(
          '#centerContainer_backButton'
        )
        textContainer.remove()
        svgContainer.remove()
        backButtonContainer.remove()
        createContent(
          '12%',
          '30%',
          'Quick Changeover',
          `The easy-to use pallet configuration tool\nallows to quickly create, modify, copy or\nclear new pattern recipes on the HMI or\nadjust parameters such as case or pallet\nheight, number of layers, pick/drop speeds\nor delays during production. A changeover\nusing a pre-programmed recipe can be\naccomplished in under 1min. To set up a\nnew recipe, trained technicians require\napproximately 5 min`,
          'quickC_p'
        )
        createSvg('19%', '34%', '60%', '25%')
        createBackButton()
      }
    })
  }

  createBackButton()

  check1()
  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        console.timeEnd('test3')
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
          })
        }, 500)
      }
    }
  }
})

easilyAGP_button.addEventListener('click', function (e) {
  HideShowMainButtons()
  if (x.matches) {
    createVideos(
      'assets/easilyAGP/easilyAGP_C1.mp4',
      'assets/easilyAGP/easilyAGP_C2.mp4',
      'assets/easilyAGP/easilyAGP_C3.mp4'
    )
  } else {
    createVideos(
      'assets/easilyAGP/easilyAGP1.mp4',
      'assets/easilyAGP/easilyAGP2.mp4',
      'assets/easilyAGP/easilyAGP3.mp4'
    )
  }

  createContent(
    '10%',
    '30%',
    'Easily Accesible Grace Port',
    `Grace ports provide convenient communication\nand low-voltage power portals at the outside of the\nmachine's electrical cabinet`,
    'easilyAGP_p'
  )
  createSvg('15%', '34%', '66%', '28%')
  createBackButton()

  window.addEventListener('resize', function (e) {
    if (showCont.hasChildNodes()) {
      const textContainer = document.querySelector('#centerContainer_text')
      const svgContainer = document.querySelector('#centerContainer_svg')
      const backButtonContainer = document.querySelector(
        '#centerContainer_backButton'
      )
      textContainer.remove()
      svgContainer.remove()
      backButtonContainer.remove()
      createContent(
        '10%',
        '30%',
        'Easily Accesible Grace Port',
        `Grace ports provide convenient communication\nand low-voltage power portals at the outside of the\nmachine's electrical cabinet`,
        'easilyAGP_p'
      )
      createSvg('15%', '34%', '66%', '28%')

      createBackButton()
    }
  })

  check1()
  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'
        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
          })
        }, 500)
      }
    }
  }
})

fourCIDO_button.addEventListener('click', function (e) {
  HideShowMainButtons()

  if (x.matches) {
    createVideos(
      'assets/fourCIDO/fourCIDO_C1.mp4',
      'assets/fourCIDO/fourCIDO_C2.mp4',
      'assets/fourCIDO/fourCIDO_C3.mp4'
    )
  } else {
    createVideos(
      'assets/fourCIDO/fourCIDO1.mp4',
      'assets/fourCIDO/fourCIDO2.mp4',
      'assets/fourCIDO/fourCIDO3.mp4'
    )
  }
  createContent(
    '65%',
    '40%',
    'Four Case Infeed Direction Options',
    `The modular configuration offers various infeed configurations to choose from to better accomodate your plant layout`,
    'fourCIDO_p',
    'fourCIDO_text',
    'fourCIDO_label'
  )

  createSvg('66%', '42%', '60%', '50%')

  createBackButton()

  window.addEventListener('resize', function (e) {
    if (showCont.hasChildNodes()) {
      const textContainer = document.querySelector('#centerContainer_text')
      const svgContainer = document.querySelector('#centerContainer_svg')
      const backButtonContainer = document.querySelector(
        '#centerContainer_backButton'
      )
      textContainer.remove()
      svgContainer.remove()
      backButtonContainer.remove()
      createContent(
        '65%',
        '40%',
        'Four Case Infeed Direction Options',
        `The modular configuration offers various infeed configurations to choose from to better accomodate your plant layout`,
        'fourCIDO_p',
        'fourCIDO_text',
        'fourCIDO_label'
      )

      createSvg('66%', '42%', '60%', '50%')

      createBackButton()
    }
  })

  check1()
  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          setTimeout(() => {
            HideShowCont()
            InterpolateVideo(loop, video1, video2)
          }, 6000)
        }, 1000)
      }
    }
  }
})

maximumU_button.addEventListener('click', function (e) {
  console.time('test1')
  HideShowMainButtons()

  if (x.matches) {
    createVideos(
      'assets/maximumU/maximumU_C1.mp4',
      'assets/maximumU/maximumU_C2.mp4',
      'assets/maximumU/maximumU_C3.mp4'
    )
  } else {
    createVideos(
      'assets/maximumU/maximumU1.mp4',
      'assets/maximumU/maximumU2.mp4',
      'assets/maximumU/maximumU3.mp4'
    )
  }

  createContent(
    '58%',
    '35%',
    'Maximum Uptime',
    'Utilizing a FANUC M710iC/50H robot with a MTBF 80,000 hrs maximizes uptime and minimizes maintenance requirements',
    'maximumU_p'
  )
  createSvg('59%', '37%', '18%', '60%')
  createBackButton()

  window.addEventListener('resize', function (e) {
    if (showCont.hasChildNodes()) {
      const textContainer = document.querySelector('#centerContainer_text')
      const svgContainer = document.querySelector('#centerContainer_svg')
      const backButtonContainer = document.querySelector(
        '#centerContainer_backButton'
      )
      textContainer.remove()
      svgContainer.remove()
      backButtonContainer.remove()
      createContent(
        '58%',
        '35%',
        'Maximum Uptime',
        'Utilizing a FANUC M710iC/50H robot with a MTBF 80,000 hrs maximizes uptime and minimizes maintenance requirements',
        'maximumU_p'
      )
      createSvg('59%', '37%', '18%', '60%')

      createBackButton()
    }
  })

  check1()
  let video1check = false
  let video2check = false
  let video3check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)

    function repeatcheck() {
      if (video1.readyState === 4) {
        video1check = true
      }
      if (video2.readyState === 4) {
        video2check = true
      }
      if (video3.readyState === 4) {
        video3check = true
      }
      setTimeout(() => {
        if (!video1check || !video2check || !video3check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video1check && video2check && video3check) {
        console.timeEnd('test1')
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        loop.classList.add('short-vanish')
        setTimeout(() => {
          video1.play()
          video1.addEventListener('ended', () => {
            InterpolateVideo(loop, video1, video2)
            HideShowCont()
          })
        }, 1000)
      }
    }
  }
})

quickS_button.addEventListener('click', function (e) {
  HideShowMainButtons()

  if (x.matches) {
    createVideos(null, 'assets/quickS/quickS_C.mp4', null)
  } else {
    createVideos(null, 'assets/quickS/quickS.mp4', null)
  }
  if (x.matches) {
    createContent(
      '7%',
      '30%',
      'Quick Startup',
      'The cell comespre-assembled on a common base for easy placement and start-up',
      'quickS_p'
    )

    createSvg('13%', '30%', '35%', '75%')

    window.addEventListener('resize', function (e) {
      if (showCont.hasChildNodes()) {
        const textContainer = document.querySelector('#centerContainer_text')
        const svgContainer = document.querySelector('#centerContainer_svg')
        const backButtonContainer = document.querySelector(
          '#centerContainer_backButton'
        )
        textContainer.remove()
        svgContainer.remove()
        backButtonContainer.remove()
        createContent(
          '7%',
          '30%',
          'Quick Startup',
          'The cell comespre-assembled on a common base for easy placement and start-up',
          'quickS_p'
        )
        createSvg('13%', '30%', '35%', '75%')

        createBackButton()

        backButton.addEventListener('click', function () {
          backButton.style.pointerEvents = 'none'
          HideShowCont()
          video2.classList.add('short-vanish')
          loop.play()
          loop.classList.remove('short-vanish')

          setTimeout(() => {
            HideShowMainButtons()
            loop.style.zIndex = '-1'
            video2.remove()
            showCont.innerHTML = ''
          }, 300)
        })
      }
    })
  } else {
    createContent(
      '8%',
      '75%',
      'Quick Startup',
      'The cell comespre-assembled on a common base for easy placement and start-up',
      'quickS_p'
    )
    createSvg('13%', '79%', '35%', '75%')

    window.addEventListener('resize', function (e) {
      if (showCont.hasChildNodes()) {
        const textContainer = document.querySelector('#centerContainer_text')
        const svgContainer = document.querySelector('#centerContainer_svg')
        const backButtonContainer = document.querySelector(
          '#centerContainer_backButton'
        )
        textContainer.remove()
        svgContainer.remove()
        backButtonContainer.remove()
        createContent(
          '8%',
          '75%',
          'Quick Startup',
          'The cell comespre-assembled on a common base for easy placement and start-up',
          'quickS_p'
        )
        createSvg('13%', '79%', '35%', '75%')

        createBackButton()

        backButton.addEventListener('click', function () {
          backButton.style.pointerEvents = 'none'
          HideShowCont()
          video2.classList.add('short-vanish')
          loop.play()
          loop.classList.remove('short-vanish')

          setTimeout(() => {
            HideShowMainButtons()
            loop.style.zIndex = '-1'
            video2.remove()
            showCont.innerHTML = ''
          }, 300)
        })
      }
    })
  }

  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  centerContainerMade.setAttribute('id', 'centerContainer_backButton')
  const buttonContainerMade = document.createElement('div')
  buttonContainerMade.classList.add('buttonContainer')
  buttonContainerMade.style.width = containVideoWidth + 'px'
  buttonContainerMade.style.height = containVideoHeight + 'px'
  backButton = document.createElement('button')
  let fontvar = `calc(4px + (17 - 4) * ((${
    containVideoWidth + 'px'
  } - 320px) / (1440 - 320)))`
  backButton.style.fontSize = fontvar
  backButton.classList.add('viewR_a')
  backButton.textContent = 'Back to Features'
  backButtonContainer = document.createElement('div')
  backButtonContainer.classList.add('viewR_container')
  showCont.appendChild(centerContainerMade)
  centerContainerMade.append(buttonContainerMade)
  buttonContainerMade.appendChild(backButtonContainer)
  backButtonContainer.appendChild(backButton)

  check1()

  let video2check = false

  function check1() {
    clearcheck = setInterval(repeatcheck, 500)
    function repeatcheck() {
      if (video2.readyState === 4) {
        video2check = true
      }
      setTimeout(() => {
        if (!video2check) {
          loader.style.zIndex = '200'
          loader.classList.add('show')
        }
      }, 1000)

      if (video2check) {
        loader.classList.remove('show')
        loader.classList.add('short-vanish')
        loader.style.zIndex = '-200'

        clearInterval(clearcheck)

        video2.play()

        InterpolateVideo(loop, loop, video2)
        HideShowCont()
        setTimeout(() => {
          loop.currentTime = 0
          loop.pause()
          loop.style.zIndex = '-5'
        }, 500)

        backButton.addEventListener('click', function () {
          backButton.style.pointerEvents = 'none'
          HideShowCont()
          video2.classList.add('short-vanish')
          loop.play()
          loop.classList.remove('short-vanish')

          setTimeout(() => {
            HideShowMainButtons()
            loop.style.zIndex = '-1'
            video2.remove()
            showCont.innerHTML = ''
          }, 300)
        })
      }
    }
  }
})

// Check when the spinner is fully loaded
var SirvOptions = {
  spin: {
    onready: function () {
      initial.classList.remove('show')
      initial.classList.add('short-vanish')
      loader.style.zIndex = '-100'
      setTimeout(() => {
        initial.style.zIndex = '-200'
      }, 300)
    },
  },
}

// View rotation button
viewR_button.addEventListener('click', function (e) {
  loader.classList.remove('short-vanish')
  loader.style.zIndex = '1'
  initial.style.zIndex = '0'
  initial.classList.remove('short-vanish')
  initial.classList.add('show')

  HideShowMainButtons()
  HideShowCont()

  const centerContainerMade = document.createElement('div')
  centerContainerMade.classList.add('centerContainer')
  centerContainerMade.style.opacity = '0'
  centerContainerMade.classList.add('show')
  centerContainerMade.style.zIndex = '100'
  centerContainerMade.setAttribute('id', 'centerContainer_backButton')
  const buttonContainerMade = document.createElement('div')
  buttonContainerMade.classList.add('buttonContainer')
  buttonContainerMade.setAttribute('id', 'buttonContainer_backButton')
  buttonContainerMade.style.width = containVideoWidth + 'px'
  buttonContainerMade.style.height = containVideoHeight + 'px'
  backButton = document.createElement('button')
  backButton.classList.add('viewR_a')
  backButton.textContent = 'Back to Features'
  backButtonContainer = document.createElement('div')
  backButtonContainer.classList.add('viewR_container')
  mainContainer.appendChild(centerContainerMade)
  centerContainerMade.append(buttonContainerMade)
  buttonContainerMade.appendChild(backButtonContainer)
  backButtonContainer.appendChild(backButton)

  window.addEventListener('resize', function (e) {
    if (centerContainerMade.hasChildNodes()) {
      buttonContainerMade.style.width = containVideoWidth + 'px'
      buttonContainerMade.style.height = containVideoHeight + 'px'
      let fontvar = `calc(4px + (17 - 4) * ((${
        containVideoWidth + 'px'
      } - 320px) / (1440 - 320)))`
      backButton.style.fontSize = fontvar
    }
  })

  backButton.addEventListener('click', function () {
    ArreglarLineas()
    backButton.style.pointerEvents = 'none'
    loop.style.zIndex = '-5'
    loop.currentTime = 0
    loop.classList.remove('short-vanish')

    centerContainerMade.classList.remove('show')
    centerContainerMade.classList.add('short-vanish')
    HideShowCont()
    setTimeout(() => {
      initial.classList.remove('show')
      initial.classList.add('short-vanish')
      loader.style.zIndex = '-100'
      setTimeout(() => {
        initial.style.zIndex = '-200'
      }, 300)
    }, 500)

    HideShowMainButtons()

    setTimeout(() => {
      loop.style.zIndex = '-1'
      showCont.innerHTML = ''
      centerContainer_backButton.remove()
    }, 1000)
  })

  setTimeout(() => {
    const centerContainerMade = document.createElement('div')
    centerContainerMade.classList.add('centerContainer')
    centerContainerMade.setAttribute('id', 'centerContainer_model')
    const model = document.createElement('div')
    model.classList.add('Sirv')
    model.setAttribute(
      'data-src',
      'https://listyara.sirv.com/propeller%204k/propeller%204k.spin?zoom=5'
    )

    showCont.appendChild(model)
  }, 1000)
})

close.addEventListener('click', function (e) {
  modalalert.style.pointerEvents = 'none'
  modalalert.style.transform = 'scale(0)'
  alertdiv.style.opacity = 0
  alertdiv.style.pointerEvents = 'none'
})
