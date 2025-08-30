import VoidGuide from '../assets/PSquadVoidVanguard.pdf'
import VoidOutGuide from '../assets/PSquadVoidOutside.pdf'

export default function VoraciousVoid() {
  return (
    <>
      <div style={{ display: 'flex', gap: '0em' }}>
        <iframe
          src={VoidGuide}
          width="900px"
          height="400px"
          title="Vanguard Void Guide"
          style={{ flex: 1 }}
        />
        <iframe
          src={VoidOutGuide}
          width="900px"
          height="400px"
          title="Vanguard Void Outside Guide"
          style={{ flex: 1 }}
        />
      </div>
    </>
  )
}