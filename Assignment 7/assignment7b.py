# Counts the occurrences of the substring sub in a string.
text = "hello world, hello universe"
count_result = text.count("hello")
print(f"Count result: {count_result}")


# Returns True if the string ends with the specified suffix.
filename = "report.pdf"
endswith_result = filename.endswith(".pdf")
print(f"Endswith result: {endswith_result}")

# Find returns the lowest index of the substring sub or -1 if not found.
sentence = "Python is amazing"
find_result = sentence.find("is")
index_result = sentence.index("is")
print(f"Find result: {find_result}")
print(f"Index result: {index_result}")

# Join() concatenates a sequence of strings, using the string as a separator.
words = ["Bootcamp", "is", "over"]
join_result = " ".join(words)
print(f"Join result: {join_result}")

# Replace replaces all the occurances of old with new.
message = "I love bagels, bagels are good too."
replace_result = message.replace("bagels", "chicken", 1)
print(f"Replace result: {replace_result}")

# Splits a string into a list using the specified delimiter sep. The maxsplit argument limits the number of splits.
data = "computer,laptop,mouse"
split_result = data.split(",")
print(f"Split result: {split_result}") 

# splitlines splits a string into a list at line breaks.
paragraph = "Line1\nLine2\nLine3"
splitlines_result = paragraph.splitlines()
print(f"Splitlines result: {splitlines_result}")

# Returns True if the string starts with the specified prefix.
title = "Introduction to Python"
startswith_result = title.startswith("Intro")
print(f"Startswith result: {startswith_result}")

# Removes whitespace.
text = "   there's some space to get rid of   "
strip_result = text.strip()
print(f"Strip result: '{strip_result}'")


