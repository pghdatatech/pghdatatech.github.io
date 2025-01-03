def disStuInfo(schoolID, *firstName, **lastEmail):
    """
    Displays student information including school ID, first name, 
    last name, and email. Matches names to emails based on arguments.
    """
    for name in firstName:
        if name in lastEmail:
            print(f"{schoolID}\n{name}\n{name}\n{lastEmail[name]}\n")
        else:
            print(f"{schoolID}\n'unmatched'\n{name}\n{lastEmail.get(name, 'No email found')}\n")

disStuInfo(
    10001,
    'John', 'Peter',
    Smith='jSmith@gmail.com', Potter="Peter@yahoo.com", Doe="j@gmail.com"
)
