'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  roles: string[]
  className?: string
  typingSpeed?: number
  pauseDuration?: number
  deletingSpeed?: number
}

export default function TypingAnimation({
  roles,
  className = '',
  typingSpeed = 10,
  pauseDuration = 2500,
  deletingSpeed = 10
}: TypingAnimationProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout: NodeJS.Timeout

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    if (isTyping && !isDeleting) {
      // Typing animation
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
          setIsTyping(false)
        }, pauseDuration)
      }
    } else if (isDeleting) {
      // Deleting animation
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false)
        setIsTyping(true)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [currentText, currentRoleIndex, isTyping, isDeleting, roles, typingSpeed, pauseDuration, deletingSpeed])

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span
        className={`inline-block ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <b>|</b>
      </span>
    </span>
  )
}
