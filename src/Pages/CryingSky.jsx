import FireFythGuide from '../assets/PSquadFireFythCS.pdf'
import StormGuide from '../assets/PSquadStormCS.pdf'

export default function CryingSky() {
  return (
    <>
      <div style={{ display: 'flex', gap: '0em' }}>
              <iframe
                src={FireFythGuide}
                width="900px"
                height="400px"
                title="Fire Fyth Guide"
                style={{ flex: 1 }}
              />
              <iframe
                src={StormGuide}
                width="900px"
                height="400px"
                title="CS Storm Guide"
                style={{ flex: 1 }}
              />
            </div>
    </>
  )
}