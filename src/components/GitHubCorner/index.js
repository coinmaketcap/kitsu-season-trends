import React from 'react'
import './index.sss'

const GitHubCorner = () => (
  <a
    href='//github.com/wopian/kitsu-season-trends'
    className='github-corner'
    aria-label='View source on Github'
    target='_blank'
    rel='noopener noreferrer'
  >
    <svg
      width="80"
      height="80"
      viewBox="0 0 250 250">
      <path d="M0 250V0h250Z"/>
      <path fill='currentColor' className="octo-arm" d="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16"/>
      <path fill='currentColor' className="octo-body" d="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z"/>
    </svg>
  </a>
)

export default GitHubCorner
