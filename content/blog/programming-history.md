# My Programming History

> 12 Feb, 2022 · 3 min

Computer science is a fascinating field, with technology growing
exponentially and code being used in various devices such as gaming
consoles, TVs, and web browsers. Being fascinated by technology since
childhood, pursuing a career in technology was the perfect choice for
me.

My journey in programming started in high school when I took my Intro to
Programming class. Initially, I was excited to learn game development,
but unfortunately, the teacher was not well-versed in programming, and
the book used was in C, which made it difficult for a beginner like me.
As a result, I developed a dislike for programming, assuming that all
programming would be as challenging.

However, I gave programming another chance after graduating high school
and enrolling in California State University, Long Beach. Here, I was
introduced to Python, which was much easier than C. The first program I
created was able to calculate the area, circumference, surface area, and
volume of a circle/sphere based on user input. This program gave me a
sense of accomplishment and made me realize that programming was my
passion. Below are snippets of my program:

``` py

"""
This program lets the user to choose what kind of option they would like to
calculate: the area of a circle, the circumference of a circle, the surface
area of a sphere, or the volume of the sphere. The program gets the user
to enter the radius; with that, the radius will be used to calculate
whatever the user chooses from the four options. If the user has an invalid
input, then the program will keep on looping until the user inputs something
valid.
"""

# Function to get the radius
def getRadius():
    while True:
        try:
            radius = int(input('Enter a positive integer for the radius: '))
            while radius < 1:
                print()
                radius = int(input('Enter a POSITIVE integer for the radius: '))
            return radius
        except ValueError:
            print()
            print('Invalid input. Please try again.')

# Function to calculate the area
def calcArea(radius):
     area = PI * (radius ** 2)
     return area

# Function to calculate the circumference
def calcCircumference(radius):
    circumference = 2 * PI * radius
    return circumference

# Function to calculate the surface area
def calcSurfaceArea(radius):
    surfaceArea = 4 * PI * (radius ** 2)
    return surfaceArea

# Function to calculate the volume
def calcVolume(radius):
    volume = (4 / 3) * PI * (radius ** 3)
    return volume

# Function to display the area
def displayArea(radius, area):

    print()
    print('Your radius is', radius)
    print('The area is', format(area, '.2f'))

# Function to display the circumference
def displayCircumference(radius, circumference):

    print()
    print('Your radius is', radius)
    print('The circumference is', format(circumference, '.2f'))

...

#Main function
def main():

    #Menu
    print('--Calculate the _____ of a circle/sphere--')
    print('1) Area')
    print('2) Circumference')
    print('3) Surface Area')
    print('4) Volume')
    print()

    while True:
        choice = input('Enter the number of the option you would wish to use: ')


        #Area
        if choice == '1':

            print()
            print('--Area--')
            radius = getRadius()
            area = calcArea(radius)
            displayArea(radius, area)
            print()

...

main()

```

When I graduated from my university in 2020, I was lost in what I wanted
to do with my degree. I first decided to do full-stack development,
because my senior project class exposed it to me. I also decided to do
information technology / system administration, because I recently
started learning about Linux and making it my primary operating system.
Eventually, I decided that those fields didn\'t interest me because they
were too technical.

It took me two years to finally decide what I wanted to: frontend
development. This field allows me to express creativity in the
applications I make. My sense of creativity and beauty comes from my
passion for photography, and I hope to reflect them in my programming
career.
