import './App.css'
import OutsideGuide from './assets/PSquadCRGuideOut.pdf'
import VGGuide from './assets/PSquadCRGuideVG.pdf'

export default function CabalsRevenge() {
  return (
    <>
      <div style={{ display: 'flex', gap: '0em' }}>
                    <iframe
                      src={OutsideGuide}
                      width="900px"
                      height="400px"
                      title="CR Outside Guide"
                      style={{ flex: 1 }}
                    />
                    <iframe
                      src={VGGuide}
                      width="900px"
                      height="400px"
                      title="CR VG Guide"
                      style={{ flex: 1 }}
                    />
      </div>
    </>
  )
}