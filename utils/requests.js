const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

export async function fetchProperties() {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }
    return res.json();
  } catch (error) {
    throw new Error(error);
    return [];
  }
}

export async function fetchPropertyById(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch property details");
    }

    return res.json();
  } catch (error) {
    throw new Error(error);
    return null;
  }
}
