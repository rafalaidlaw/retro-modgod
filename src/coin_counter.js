function calculateTotalByWeight(coins) {
        const coinWeights = {
          10: { canadian: 2.35, american: 2.268 },
          25: { canadian: 5.0, american: 5.670 },
          25: { canadian: 7.0, american: 5.670 },
          100: { canadian: 7.0, american: 8.1 }
        };
      
        const coinValues = {
          10: 0.10,
          25: 0.25,
          100: 1.00
        };
      
        let americanSum = 0;
        let canadianSum = 0;
      
        coins.forEach(coin => {
          const { canadian, american } = coinWeights[coin];
          const weight = coin;
          
          if (Math.abs(weight - canadian) < 0.05) {
            canadianSum += coinValues[coin];
          } else if (Math.abs(weight - american) < 0.05) {
            americanSum += coinValues[coin];
          } else {
            console.warn("Unknown coin weight: " + weight);
          }
        });
      
        const canadianConverted = canadianSum * 0.72;
        
        const total = americanSum + canadianConverted;
        
        return total;
      }
      
      // Example usage:
      const coinsWithWeights = [2.35, 2.268, 5.0, 5.67, 7.0, 8.1, 2.268, 5.0]; // Weights in grams
      const total = calculateTotalByWeight(coinsWithWeights);
      console.log("Final Total: $" + total.toFixed(2));
      