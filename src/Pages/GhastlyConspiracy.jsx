import GhastlyGuide from '../assets/PSquadGCGuide.pdf'

export default function Ghastly() {
  return (
    <>
          <div style={{ display: 'flex', gap: '0em' }}>
                        <iframe
                          src={GhastlyGuide}
                          width="900px"
                          height="600px"
                          title="Ghastly Conspiracy Guide"
                          style={{ flex: 1 }}
                        />
                      </div>
    </>
  )
}