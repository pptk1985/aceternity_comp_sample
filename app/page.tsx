import CardDemo from "@/components/blocks/cards-demo-1";
import CardDemo2 from "@/components/blocks/cards-demo-2";
import CardDemo3 from "@/components/blocks/cards-demo-3";
import ThreeDCardDemo from "@/components/example/3d-card-demo";
import ThreeDCardDemo2 from "@/components/example/3d-card-demo-2";
import AnimatedPinDemo from "@/components/example/3d-pin-demo";
import AnimatedModalDemo from "@/components/example/animated-modal-demo";
import AnimatedTooltipPreview from "@/components/example/animated-tooltip-demo";
import AppleCardsCarouselDemo from "@/components/example/apple-cards-carousel-demo";
import AuroraBackgroundDemo from "@/components/example/aurora-background-demo";
import BackgroundBeamsDemo from "@/components/example/background-beams-demo";
import BackgroundBeamsWithCollisionDemo from "@/components/example/background-beams-with-collision-demo";
import BackgroundBoxesDemo from "@/components/example/background-boxes-demo";
import BackgroundGradientDemo from "@/components/example/background-gradient-demo";
import CanvasRevealEffectDemo from "@/components/example/canvas-reveal-effect-demo";
import CardHoverEffectDemo from "@/components/example/card-hover-effect-demo";
import CardSpotlightDemo from "@/components/example/card-spotlight-demo";
import CardStackDemo from "@/components/example/card-stack-demo";
import CompareDemo from "@/components/example/compare-demo";
import CompareAutoPlayDemo from "@/components/example/compare-autoplay-demo";
import CoverDemo from "@/components/example/cover-demo";
import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import DirectionAwareHoverDemo from "@/components/example/direction-aware-hover-demo";
import EvervaultCardDemo from "@/components/example/evervault-card-demo";
import ExpandableCardDemoGrid from "@/components/blocks/expandable-card-demo-grid";
import ExpandableCardDemoStandard from "@/components/blocks/expandable-card-demo-standard";
import BentoGridDemo from "@/components/example/bento-grid-demo";
import BentoGridSecondDemo from "@/components/example/bento-grid-demo-2";
import BentoGridThirdDemo from "@/components/example/bento-grid-demo-3";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import FeaturesSectionDemo2 from "@/components/blocks/features-section-demo-2";
import FeaturesSectionDemo3, { Globe } from "@/components/blocks/features-section-demo-3";
import FileUploadDemo from "@/components/example/file-upload-demo";
import FlipWordsDemo from "@/components/example/flip-words-demo";
import FloatingDockDemo from "@/components/example/floating-dock-demo";
import FloatingNavDemo from "@/components/example/floating-navbar-demo";
import FocusCardsDemo from "@/components/example/focus-cards-demo";
import FollowingPointerDemo from "@/components/example/following-pointer-demo";
import GlareCardDemo from "@/components/example/glare-card-demo";
import GlareCardDemo2 from "@/components/example/glare-card-demo-2";
import GlowingStarsBackgroundCardPreview from "@/components/example/glowing-stars-demo";
import GoogleGeminiEffectDemo from "@/components/example/google-gemini-effect-demo";
import BackgroundGradientAnimationDemo from "@/components/example/background-gradient-animation-demo";
import GridBackgroundDemo from "@/components/example/grid-background-demo";
import HeroHighlightDemo from "@/components/example/hero-highlight-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import HoverBorderGradientDemo from "@/components/example/hover-border-gradient-demo";
import ImagesSliderDemo from "@/components/example/images-slider-demo";
import InfiniteMovingCardsDemo from "@/components/example/infinite-moving-cards-demo";
import LampDemo from "@/components/example/lamp-demo";
import LayoutGridDemo from "@/components/example/layout-grid-demo";
import LensDemo from "@/components/example/lens-demo";
import LinkPreviewDemo from "@/components/example/link-preview-demo";
import LinkPreviewDemoSecond from "@/components/example/link-preview-demo-2";
import MacbookScrollDemo from "@/components/example/macbook-scroll-demo";
import MeteorsDemo from "@/components/example/meteors-demo";
import MovingBorderDemo from "@/components/example/moving-border-demo";
import MultiStepLoaderDemo from "@/components/example/multi-step-loader-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import ParallaxScrollDemo from "@/components/example/parallax-scroll-demo";
import ParallaxScrollSecondDemo from "@/components/example/parallax-scroll-2-demo";
import PlaceholdersAndVanishInputDemo from "@/components/example/placeholders-and-vanish-input-demo";
import ShootingStarsAndStarsBackgroundDemo from "@/components/example/shooting-stars-and-stars-background-demo";
import SidebarDemo from "@/components/example/sidebar-demo";
import SidebarDemo2 from "@/components/example/sidebar-demo-2";
import SignupFormDemo from "@/components/example/signup-form-demo";
import SparklesPreview from "@/components/example/sparkles-demo";
import SpotlightPreview from "@/components/example/spotlight-demo";
import StickyScrollRevealDemo from "@/components/example/sticky-scroll-reveal-demo";
import SVGMaskEffectDemo from "@/components/example/svg-mask-effect-demo";
import TabsDemo from "@/components/example/tabs-demo";
import TailwindcssButtons from "@/components/example/tailwindcss-buttons-demo";
import TextGenerateEffectDemo from "@/components/example/text-generate-effect-demo";
import TextGenerateEffectDemo2 from "@/components/example/text-generate-effect-demo-2";
import TextHoverEffectDemo from "@/components/example/text-hover-effect-demo";
import TextRevealCardPreview from "@/components/example/text-reveal-card-demo";
import TimelineDemo from "@/components/example/timeline-demo";
import TracingBeamDemo from "@/components/example/tracing-beam-demo";
import TypewriterEffectDemo from "@/components/example/typewriter-effect-demo-2";
import TypewriterEffectSmoothDemo from "@/components/example/typewriter-effect-demo-1";
import VortexDemo from "@/components/example/vortex-demo";
import VortexDemoSecond from "@/components/example/vortex-demo-2";
import WavyBackgroundDemo from "@/components/example/wavy-background-demo";
import WobbleCardDemo from "@/components/example/wobble-card-demo";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10 bg-gray-300">
      {/* 目次 */}
      <nav className="m-24">
        <ul className="flex flex-wrap gap-2 text-lg">
          <li className="border p-2 hover:bg-gray-200"><a href="#3d-card-effect">3D Card Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#3d-pin">3D Pin</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#animated-modal">Animated Modal</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#animated-tooltip">Animated Tooltip</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#apple-cards-carousel">Apple Cards Carousel</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#aurora-background">Aurora Background</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#background-beams">Background Beams</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#background-beams-with-collision">Background Beams With Collision</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#background-boxes">Background Boxes</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#background-gradient">Background Gradient</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#bento-grid">Bento Grid</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#canvas-reveal-effect">Canvas Reveal Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#card-hover-effect">Card Hover Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#card-spotlight">Card Spotlight</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#card-stack">Card Stack</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#cards">Cards</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#compare">Compare</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#container-cover">Container Cover</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#container-scroll-animation">Container Scroll Animation</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#direction-aware-hover">Direction Aware Hover</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#evervault-card">Evervault Card</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#expandable-card">Expandable Card</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#feature-divs">Feature divs</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#file-upload">File Upload</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#flip-words">Flip Words</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#floating-dock">Floating Dock</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#floating-navbar">Floating Navbar</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#focus-cards">Focus Cards</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#following-pointer">Following Pointer</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#github-globe">GitHub Globe</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#glare-card">Glare Card</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#glowing-stars">Glowing Stars</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#google-gemini-effect">Google Gemini Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#gradient-animation">Gradient Animation</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#grid-and-dot-backgrounds">Grid and Dot Backgrounds</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#hero-highlight">Hero Highlight</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#hero-parallax">Hero Parallax</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#hover-border-gradient">Hover Border Gradient</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#images-slider">Images Slider</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#infinite-moving-cards">Infinite Moving Cards</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#lamp-effect">Lamp Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#layout-grid">Layout Grid</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#lens">Lens</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#link-preview">Link Preview</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#macbook-scroll">Macbook Scroll</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#meteors">Meteors</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#moving-border">Moving Border</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#multi-step-loader">Multi Step Loader</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#navbar-menu">Navbar Menu</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#parallax-scroll">Parallax Scroll</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#placeholders-vanish-input">Placeholders And Vanish Input</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#shooting-stars">Shooting Stars</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#sidebar">Sidebar</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#signup-form">Signup Form</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#sparkles">Sparkles</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#spotlight">Spotlight</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#sticky-scroll-reveal">Sticky Scroll Reveal</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#svg-mask-effect">SVG Mask Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#tabs">Tabs</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#tailwind-buttons">Tailwind CSS buttons</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#text-generate-effect">Text Generate Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#text-hover-effect">Text Hover Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#text-reveal-card">Text Reveal Card</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#timeline">Timeline</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#tracing-beam">Tracing Beam</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#typewriter-effect">Typewriter Effect</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#vortex">Vortex</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#wavy-background">Wavy Background</a></li>
          <li className="border p-2 hover:bg-gray-200"><a href="#wobble-card">Wobble Card</a></li>
        </ul>
      </nav>

      {/* 各セクション */}
      <div className="w-5/6 mb-8" id="3d-card-effect">
        <h2>3D Card Effect</h2>
        <ThreeDCardDemo />
        <div className="m-8" />
        <ThreeDCardDemo2 />
      </div>

      <div className="w-5/6 mb-8" id="3d-pin">
        <h2>3D Pin</h2>
        <AnimatedPinDemo />
      </div>

      <div className="w-5/6 mb-8" id="animated-modal">
        <h2>Animated Modal</h2>
        <AnimatedModalDemo />
      </div>

      <div className="w-5/6 mb-8" id="animated-tooltip">
        <h2>Animated Tooltip</h2>
        <AnimatedTooltipPreview />
      </div>

      <div className="w-5/6 mb-8" id="apple-cards-carousel">
        <h2>Apple Cards Carousel</h2>
        <AppleCardsCarouselDemo />
      </div>

      <div className="w-5/6 mb-8" id="aurora-background">
        <h2>Aurora Background</h2>
        <AuroraBackgroundDemo />
      </div>

      <div className="w-5/6 mb-8" id="background-beams">
        <h2>Background Beams</h2>
        <BackgroundBeamsDemo />
      </div>

      <div className="w-5/6 mb-8" id="background-beams-with-collision">
        <h2>Background Beams With Collision</h2>
        <BackgroundBeamsWithCollisionDemo />
      </div>

      <div className="w-5/6 mb-8" id="background-boxes">
        <h2>Background Boxes</h2>
        <BackgroundBoxesDemo />
      </div>

      <div className="w-5/6 mb-8" id="background-gradient">
        <h2>Background Gradient</h2>
        <BackgroundGradientDemo />
      </div>

      <div className="w-5/6 mb-8" id="bento-grid">
        <h2>Bento Grid</h2>
        <BentoGridDemo />
        <div className="m-8" />
        <BentoGridSecondDemo />
        <div className="m-8" />
        <BentoGridThirdDemo />
      </div>

      <div className="w-5/6 mb-8" id="canvas-reveal-effect">
        <h2>Canvas Reveal Effect</h2>
        <CanvasRevealEffectDemo />
      </div>

      <div className="w-5/6 mb-8 bg-white" id="card-hover-effect">
        <h2>Card Hover Effect</h2>
        <CardHoverEffectDemo />
      </div>

      <div className="w-5/6 mb-8" id="card-spotlight">
        <h2>Card Spotlight</h2>
        <CardSpotlightDemo />
      </div>

      <div className="w-5/6 mb-8" id="card-stack">
        <h2>Card Stack</h2>
        <CardStackDemo />
      </div>

      <div className="w-5/6 mb-8" id="cards">
        <h2>Cards</h2>
        <CardDemo />
        <div className="m-8" />
        <CardDemo2 />
        <div className="m-8" />
        <CardDemo3 />
      </div>

      <div className="w-5/6 mb-8" id="compare">
        <h2>Compare</h2>
        <CompareDemo />
        <div className="m-8" />
        <CompareAutoPlayDemo />
      </div>

      <div className="w-5/6 mb-8" id="container-cover">
        <h2>Container Cover</h2>
        <CoverDemo />
      </div>

      <div className="w-5/6 mb-8" id="container-scroll-animation">
        <h2>Container Scroll Animation</h2>
        <HeroScrollDemo />
      </div>

      <div className="w-5/6 mb-8" id="direction-aware-hover">
        <h2>Direction Aware Hover</h2>
        <DirectionAwareHoverDemo />
      </div>

      <div className="w-5/6 mb-8" id="evervault-card">
        <h2>Evervault Card</h2>
        <EvervaultCardDemo />
      </div>

      <div className="w-5/6 mb-8" id="expandable-card">
        <h2>Expandable Card</h2>
        <ExpandableCardDemoGrid />
        <div className="m-8" />
        <ExpandableCardDemoStandard />
      </div>

      <div className="w-5/6 mb-8" id="feature-divs">
        <h2>Feature sections</h2>
        <FeaturesSectionDemo />
        <div className="m-8" />
        <FeaturesSectionDemo2 />
        <div className="m-8" />
        <FeaturesSectionDemo3 />
      </div>

      <div className="w-5/6 mb-8" id="file-upload">
        <h2>File Upload</h2>
        <FileUploadDemo />
      </div>

      <div className="w-5/6 mb-8" id="flip-words">
        <h2>Flip Words</h2>
        <FlipWordsDemo />
      </div>

      <div className="w-5/6 mb-8" id="floating-dock">
        <h2>Floating Dock</h2>
        <FloatingDockDemo />
      </div>

      <div className="w-5/6 mb-8" id="floating-navbar">
        <h2>Floating Navbar</h2>
        <FloatingNavDemo />
      </div>

      <div className="w-5/6 mb-8" id="focus-cards">
        <h2>Focus Cards</h2>
        <FocusCardsDemo />
      </div>

      <div className="w-5/6 mb-8" id="following-pointer">
        <h2>Following Pointer　※うまくいかない</h2>
        <FollowingPointerDemo />
      </div>

      <div className="w-5/6 mb-8" id="github-globe">
        <h2>GitHub Globe</h2>
        <Globe />
      </div>

      <div className="w-5/6 mb-8" id="glare-card">
        <h2>Glare Card</h2>
        <GlareCardDemo />
        <div className="m-8" />
        <GlareCardDemo2 />
      </div>

      <div className="w-5/6 mb-8" id="glowing-stars">
        <h2>Glowing Stars</h2>
        <GlowingStarsBackgroundCardPreview />
      </div>

      <div className="w-5/6 mb-8" id="google-gemini-effect">
        <h2>Google Gemini Effect</h2>
        <GoogleGeminiEffectDemo />
      </div>

      <div className="w-5/6 mb-8" id="gradient-animation">
        <h2>Gradient Animation</h2>
        <BackgroundGradientAnimationDemo/>
      </div>

      <div className="w-5/6 mb-8" id="grid-and-dot-backgrounds">
        <h2>Grid and Dot Backgrounds</h2>
        <GridBackgroundDemo />
      </div>

      <div className="w-5/6 mb-8" id="hero-highlight">
        <h2>Hero Highlight</h2>
        <HeroHighlightDemo />
      </div>

      <div className="w-5/6 mb-8" id="hero-parallax">
        <h2>Hero Parallax</h2>
        <HeroParallaxDemo />
      </div>

      <div className="w-5/6 mb-8" id="hover-border-gradient">
        <h2>Hover Border Gradient</h2>
        <HoverBorderGradientDemo />
      </div>

      <div className="w-5/6 mb-8" id="images-slider">
        <h2>Images Slider</h2>
        <ImagesSliderDemo />
      </div>

      <div className="w-5/6 mb-8" id="infinite-moving-cards">
        <h2>Infinite Moving Cards</h2>
        <InfiniteMovingCardsDemo />
      </div>

      <div className="w-5/6 mb-8" id="lamp-effect">
        <h2>Lamp Effect</h2>
        <LampDemo />
      </div>

      <div className="w-5/6 mb-8" id="layout-grid">
        <h2>Layout Grid</h2>
        <LayoutGridDemo />
      </div>

      <div className="w-5/6 mb-8" id="lens">
        <h2>Lens</h2>
        <LensDemo />
      </div>

      <div className="w-5/6 mb-8" id="link-preview">
        <h2>Link Preview</h2>
        <LinkPreviewDemo />
        <div className="m-8" />
        <LinkPreviewDemoSecond />
      </div>

      <div className="w-5/6 mb-8" id="macbook-scroll">
        <h2>Macbook Scroll</h2>
        <MacbookScrollDemo />
      </div>

      <div className="w-5/6 mb-8" id="meteors">
        <h2>Meteors</h2>
        <MeteorsDemo />
      </div>

      <div className="w-5/6 mb-8" id="moving-border">
        <h2>Moving Border</h2>
        <MovingBorderDemo />
      </div>

      <div className="w-5/6 mb-8" id="multi-step-loader">
        <h2>Multi Step Loader</h2>
        <MultiStepLoaderDemo />
      </div>

      <div className="w-5/6 mb-8" id="navbar-menu">
        <h2>Navbar Menu</h2>
        <NavbarDemo />
      </div>

      <div className="w-5/6 mb-8" id="parallax-scroll">
        <h2>Parallax Scroll</h2>
        <ParallaxScrollDemo />
        <div className="m-8" />
        <ParallaxScrollSecondDemo />
      </div>

      <div className="w-5/6 mb-8" id="placeholders-vanish-input">
        <h2>Placeholders And Vanish Input</h2>
        <PlaceholdersAndVanishInputDemo />
      </div>

      <div className="w-5/6 mb-8" id="shooting-stars">
        <h2>Shooting Stars</h2>
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      <div className="w-5/6 mb-8" id="sidebar">
        <h2>Sidebar</h2>
        <SidebarDemo />
        <div className="m-8" />
        <SidebarDemo2 />
      </div>

      <div className="w-5/6 mb-8" id="signup-form">
        <h2>Signup Form</h2>
        <SignupFormDemo />
      </div>

      <div className="w-5/6 mb-8" id="sparkles">
        <h2>Sparkles</h2>
        <SparklesPreview />
      </div>

      <div className="w-5/6 mb-8" id="spotlight">
        <h2>Spotlight</h2>
        <SpotlightPreview />
      </div>

      <div className="w-5/6 mb-8" id="sticky-scroll-reveal">
        <h2>Sticky Scroll Reveal</h2>
        <StickyScrollRevealDemo />
      </div>

      <div className="w-5/6 mb-8" id="svg-mask-effect">
        <h2>SVG Mask Effect</h2>
        <SVGMaskEffectDemo />
      </div>

      <div className="w-5/6 mb-8" id="tabs">
        <h2>Tabs</h2>
        <TabsDemo />
      </div>

      <div className="w-5/6 mb-8" id="tailwind-buttons">
        <h2>Tailwind CSS buttons</h2>
        <TailwindcssButtons />
      </div>

      <div className="w-5/6 mb-8" id="text-generate-effect">
        <h2>Text Generate Effect</h2>
        <TextGenerateEffectDemo />
        <div className="m-8" />
        <TextGenerateEffectDemo2 />
      </div>

      <div className="w-5/6 mb-8" id="text-hover-effect">
        <h2>Text Hover Effect</h2>
        <TextHoverEffectDemo />
      </div>

      <div className="w-5/6 mb-8" id="text-reveal-card">
        <h2>Text Reveal Card</h2>
        <TextRevealCardPreview />
      </div>

      <div className="w-5/6 mb-8" id="timeline">
        <h2>Timeline</h2>
        <TimelineDemo />
      </div>

      <div className="w-5/6 mb-8" id="tracing-beam">
        <h2>Tracing Beam</h2>
        <TracingBeamDemo />
      </div>

      <div className="w-5/6 mb-8" id="typewriter-effect">
        <h2>Typewriter Effect</h2>
        <TypewriterEffectDemo />
        <div className="m-8" />
        <TypewriterEffectSmoothDemo />
      </div>

      <div className="w-5/6 mb-8" id="vortex">
        <h2>Vortex</h2>
        <VortexDemo />
        <div className="m-8" />
        <VortexDemoSecond />
      </div>

      <div className="w-5/6 mb-8" id="wavy-background">
        <h2>Wavy Background</h2>
        <WavyBackgroundDemo />
      </div>

      <div className="w-5/6 mb-8" id="wobble-card">
        <h2>Wobble Card</h2>
        <WobbleCardDemo />
      </div>
    </main>
  );
}
