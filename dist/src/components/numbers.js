/* eslint-disable prettier/prettier */
export const Arr = [
  {
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    phone: "9876543210",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    phone: "4567890123",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    phone: "7890123456",
  },
  {
    firstName: "David",
    lastName: "Wilson",
    phone: "2345678901",
  },
  {
    firstName: "Sarah",
    lastName: "Taylor",
    phone: "8765432109",
  },
  {
    firstName: "James",
    lastName: "Brown",
    phone: "3456789012",
  },
  {
    firstName: "Olivia",
    lastName: "Miller",
    phone: "8901234567",
  },
  {
    firstName: "William",
    lastName: "Anderson",
    phone: "5678901234",
  },
  {
    firstName: "Emma",
    lastName: "Thomas",
    phone: "9012345678",
  },
  {
    firstName: "Benjamin",
    lastName: "Hall",
    phone: "6543210987",
  },
  {
    firstName: "Ava",
    lastName: "Young",
    phone: "0123456789",
  },
  {
    firstName: "Daniel",
    lastName: "White",
    phone: "4321098765",
  },
  {
    firstName: "Mia",
    lastName: "Lee",
    phone: "8901234567",
  },
  {
    firstName: "Jacob",
    lastName: "Martin",
    phone: "7654321098",
  },
  {
    firstName: "Sophia",
    lastName: "Thompson",
    phone: "3456789012",
  },
  {
    firstName: "Matthew",
    lastName: "Clark",
    phone: "0987654321",
  },
  {
    firstName: "Isabella",
    lastName: "Harris",
    phone: "9876543210",
  },
  {
    firstName: "Ethan",
    lastName: "Lewis",
    phone: "1234567890",
  },
  {
    firstName: "Amelia",
    lastName: "Walker",
    phone: "2109876543",
  },
  {
    firstName: "Alexander",
    lastName: "Green",
    phone: "5678901234",
  },
  {
    firstName: "Harper",
    lastName: "Baker",
    phone: "4321098765",
  },
  {
    firstName: "Sebastian",
    lastName: "Gonzalez",
    phone: "9012345678",
  },
  {
    firstName: "Charlotte",
    lastName: "Evans",
    phone: "5678901234",
  },
  {
    firstName: "David",
    lastName: "Rivera",
    phone: "4321098765",
  },
  {
    firstName: "Liam",
    lastName: "Wright",
    phone: "7890123456",
  },
  {
    firstName: "Madison",
    lastName: "Roberts",
    phone: "3456789012",
  },
  {
    firstName: "Elijah",
    lastName: "Hall",
    phone: "8901234567",
  },
  {
    firstName: "Grace",
    lastName: "Morgan",
    phone: "2109876543",
  },
  {
    firstName: "Logan",
    lastName: "Bell",
    phone: "8765432109",
  },
  {
    firstName: "Sofia",
    lastName: "Butler",
    phone: "0987654321",
  },
  {
    firstName: "Carter",
    lastName: "Murphy",
    phone: "1234567890",
  },
  {
    firstName: "Chloe",
    lastName: "Cook",
    phone: "5432109876",
  },
  {
    firstName: "Henry",
    lastName: "Sanchez",
    phone: "9876543210",
  },
  {
    firstName: "Avery",
    lastName: "Parker",
    phone: "4567890123",
  },
  {
    firstName: "Jackson",
    lastName: "Collins",
    phone: "7890123456",
  },
  {
    firstName: "Ella",
    lastName: "Garcia",
    phone: "5432109876",
  },
  {
    firstName: "Samuel",
    lastName: "Price",
    phone: "9876543210",
  },
  {
    firstName: "Victoria",
    lastName: "Perry",
    phone: "4567890123",
  },
  {
    firstName: "Joseph",
    lastName: "Long",
    phone: "7890123456",
  },
  {
    firstName: "Aria",
    lastName: "Ross",
    phone: "2345678901",
  },
  {
    firstName: "Andrew",
    lastName: "Hughes",
    phone: "8765432109",
  },
  {
    firstName: "Scarlett",
    lastName: "Flores",
    phone: "3456789012",
  },
  {
    firstName: "Samuel",
    lastName: "Bennett",
    phone: "8901234567",
  },
  {
    firstName: "Abigail",
    lastName: "Reed",
    phone: "2345678901",
  },
  {
    firstName: "Jack",
    lastName: "Bailey",
    phone: "6789012345",
  },
  {
    firstName: "Luna",
    lastName: "Sanders",
    phone: "8901234567",
  },
  {
    firstName: "Owen",
    lastName: "Phillips",
    phone: "1234567890",
  },
  {
    firstName: "Mila",
    lastName: "Cruz",
    phone: "6789012345",
  },
  {
    firstName: "Daniel",
    lastName: "Simmons",
    phone: "3456789012",
  },
];

export const ArrWithId = Arr.map((item, index) => ({
  id: index + 1,
  ...item,
}));
