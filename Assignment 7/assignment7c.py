def is_prime():
    """
    Function to check if a number entered by the user is a prime number.
    """
    try:

        num = int(input("Enter a number to check if it's a prime number: "))

        if num < 2:
            print(f"{num} is not a prime number.")
            return False

    
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                print(f"{num} is not a prime number (divisible by {i}).")
                return False

        print(f"{num} is a prime number.")
        return True

    except ValueError:
        print("Invalid input. Please enter a valid integer.")
        return False

is_prime()
