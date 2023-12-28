def fractional_knapsack(value, weight, capacity):
    n = len(value)
    ratio = [(v / w, v, w) for v, w in zip(value, weight)]
    ratio.sort(reverse=True, key=lambda x: x[0])

    max_value = 0
    fractions = [0] * n

    for i in range(n):
        if ratio[i][2] <= capacity:
            fractions[i] = 1
            max_value += ratio[i][1]
            capacity -= ratio[i][2]
        else:
            fractions[i] = capacity / ratio[i][2]
            max_value += fractions[i] * ratio[i][1]
            break

    return max_value, fractions


# Example Usage:
values = [60, 100, 120,50]
weights = [10, 20, 30,23]
knapsack_capacity = 50

max_value, item_fractions = fractional_knapsack(values, weights, knapsack_capacity)

print("Maximum value:", max_value)
print("Fraction of each item to include:", item_fractions)