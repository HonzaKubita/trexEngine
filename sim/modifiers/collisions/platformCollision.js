export function solvePlatformCollisions(particles, platforms, velocityLoose) {
  velocityLoose = (100 - velocityLoose) / 100; // Convert % to decimal. example: (60% loose = 40% keep => velocity = newVelocity * 0.4)
  platforms.forEach(platform => {
    particles.forEach(particle => {
      
    });
  });
}