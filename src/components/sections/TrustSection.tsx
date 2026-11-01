import React from 'react'
import { Trophy, Star, Shield, Zap, Globe, Award } from 'lucide-react'
import { trust } from '../../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Trophy, Star, Shield, Zap, Globe, Award,
}

const TrustSection: React.FC = () => {
  const doubled = [...trust, ...trust, ...trust, ...trust]

  return (
    <section className="py-10 overflow-hidden" style={{ background: '#F5EDD8', borderTop: '1px solid rgba(255,107,0,0.1)', borderBottom: '1px solid rgba(255,107,0,0.1)' }}>
      <div className="relative">
        <div className="marquee-track">
          {doubled.map((item, i) => {
            const Icon = iconMap[item.icon] || Star
            return (
              <div
                key={i}
                className="flex items-center gap-3 mx-8 whitespace-nowrap shrink-0"
              >
                <div className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center">
                  <Icon size={15} className="text-orange" />
                </div>
                <span className="font-heading font-semibold text-dark text-sm">{item.text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange/40 ml-4" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
