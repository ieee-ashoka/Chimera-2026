'use client';

import React from 'react'
import Card from '@/components/Card'

import { competitions, type Competition } from '../competitions'
import CompetitionContent from '../competition-content'

const Competition = () => {
  const competition = competitions.find((c) => c.id === 'astro-photography')

  if (!competition) {
    return null
  }

  return (
    <div className='min-h-screen pt-32'>
        <Card title="">
            <CompetitionContent {...competition} />
        </Card>
    </div>
  )
}

export default Competition