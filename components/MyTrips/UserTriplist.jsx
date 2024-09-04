import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import ReactGoogleMapImage from 'react-google-map-image';

export default function UserTriplist(userTrips) {



  const tripData = userTrips;
  const lastTripIndex = tripData.userTrips.length - 1;
  const tripPlan = tripData.userTrips[lastTripIndex].tripPlan;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('./../../assets/images/placeholder.jpeg')}
        />
        <Text style={styles.tripName}>{tripPlan.tripName}</Text>
        <Text style={styles.tripBudget}>Budget: {tripPlan.tripBudget}</Text>
      </View>

      {tripPlan.itinerary.map((item, index) => (
        <View key={index} style={styles.itineraryItem}>
          <Text style={styles.dayTitle}>Day {item.day}: {item.title}</Text>
          <Image
            style={styles.itineraryImage}
            source={{ uri: item.locations[0]?.image }} // Displaying the first location's image
          />
          <Text style={styles.description}>{item.description}</Text>

          {item.locations.map((location, locIndex) => (
            <View key={locIndex} style={styles.location}>
              <Image
                style={styles.locationImage}
                source={{ uri: location.image }}
              />
              <Text style={styles.locationName}>{location.name}</Text>
              <Text style={styles.locationDescription}>{location.description}</Text>
            </View>
          ))}

          <View style={styles.detailsContainer}>
            <Text style={styles.details}>
              <Text style={styles.detailsLabel}>Best Time to Visit: </Text>{item.timeToVisit}
            </Text>
            <Text style={styles.details}>
              <Text style={styles.detailsLabel}>Transport: </Text>{item.transport}
            </Text>
            <Text style={styles.details}>
              <Text style={styles.detailsLabel}>Notes: </Text>{item.notes}
            </Text>
          </View>
        </View>
      ))}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  tripName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tripBudget: {
    fontSize: 18,
    color: '#888',
  },
  itineraryItem: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itineraryImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: '#444',
  },
  location: {
    marginVertical: 10,
  },
  locationImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationDescription: {
    fontSize: 16,
    color: '#555',
  },
  detailsContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
  detailsLabel: {
    fontWeight: 'bold',
  },
});