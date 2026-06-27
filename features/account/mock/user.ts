/**
 * Mock User — Account Feature
 *
 * Single source of truth for the mock authenticated user.
 * Replace with real auth context when authentication is implemented.
 *
 * No backend. No persistence.
 */

export interface MockUser {
  id: string
  fullName: string
  firstName: string
  email: string
  /** Whether the user has completed their extended profile */
  profileComplete: boolean
}

export const mockUser: MockUser = {
  id:              "usr_mock_001",
  fullName:        "Ari Nakamura",
  firstName:       "Ari",
  email:           "ari@example.com",
  profileComplete: false,
}
