function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const pricePerFoot = 0.02;
      return (distance - 400) * pricePerFoot;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
  }
  