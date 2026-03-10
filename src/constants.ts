// Geofencing
export const GEOFENCE_RADIUS_METERS = 100;
export const ALERT_COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes

// Background task name
export const LOCATION_TASK_NAME = 'NO_SWEETS_LOCATION_TASK';

// Google Places API - set your key in .env or replace here
export const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'YOUR_GOOGLE_PLACES_API_KEY';

// Place types to detect
export const TRACKED_PLACE_TYPES = ['grocery_or_supermarket', 'supermarket', 'restaurant', 'food'];

// Challenge start date
export const CHALLENGE_START = new Date('2026-03-09');
export const CHALLENGE_DAYS = 30;
