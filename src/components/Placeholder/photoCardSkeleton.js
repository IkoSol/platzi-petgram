/* Esto es para que se vea un placeholder gris cuando esté cargando el Details de una foto */
import React from 'react'
import { TextBlock, RectShape, RoundShape } from 'react-placeholder/lib/placeholders'

export const photoCardSkeleton = (
  <>
    <RectShape color='#eee' style={{ height: '280px', marginBottom: 10 }} />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <RoundShape
        color='#eee'
        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
      />
      <TextBlock color='#eee' rows={1} style={{ width: 120 }} />
    </div>
  </>
)
