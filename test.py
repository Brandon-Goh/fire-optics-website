import pygame
import sys
import math

# Initialize Pygame
pygame.init()

# Set up screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Mouse Pointer")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Pointer parameters
TAIL_LENGTH = 50
POINTER_SIZE = 50
POINTER_THICKNESS = 10
BULLSEYE_RADIUS = 80
BULLSEYE_OUTLINE_WIDTH = 5

# Hide the mouse cursor
pygame.mouse.set_visible(False)

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Clear the screen
    screen.fill(WHITE)

    # Get mouse position
    mouse_pos = pygame.mouse.get_pos()
    mouse_x, mouse_y = mouse_pos

    # Calculate the coordinates of the arrowhead
    arrowhead_x = mouse_x - int(
        POINTER_SIZE
        * math.cos(
            math.atan2(mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2)
        )
    )
    arrowhead_y = mouse_y - int(
        POINTER_SIZE
        * math.sin(
            math.atan2(mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2)
        )
    )

    # Draw pointer tail
    pygame.draw.line(
        screen,
        BLACK,
        (SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2),
        (arrowhead_x, arrowhead_y),
        POINTER_THICKNESS,
    )

    # Draw pointer head (arrow)
    pygame.draw.polygon(
        screen,
        BLACK,
        [
            (mouse_x, mouse_y),
            (
                arrowhead_x
                - int(
                    POINTER_SIZE
                    * math.cos(
                        math.atan2(
                            mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2
                        )
                        - math.pi / 6
                    )
                ),
                arrowhead_y
                - int(
                    POINTER_SIZE
                    * math.sin(
                        math.atan2(
                            mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2
                        )
                        - math.pi / 6
                    )
                ),
            ),
            (
                arrowhead_x
                - int(
                    POINTER_SIZE
                    * math.cos(
                        math.atan2(
                            mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2
                        )
                        + math.pi / 6
                    )
                ),
                arrowhead_y
                - int(
                    POINTER_SIZE
                    * math.sin(
                        math.atan2(
                            mouse_y - SCREEN_HEIGHT // 2, mouse_x - SCREEN_WIDTH // 2
                        )
                        + math.pi / 6
                    )
                ),
            ),
        ],
    )

    # Check if mouse head is near the center of the screen
    distance_to_center = math.sqrt(
        (mouse_x - SCREEN_WIDTH // 2) ** 2 + (mouse_y - SCREEN_HEIGHT // 2) ** 2
    )
    if distance_to_center < BULLSEYE_RADIUS:
        pygame.draw.circle(
            screen, RED, (SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2), BULLSEYE_RADIUS
        )
        pygame.draw.circle(
            screen,
            BLACK,
            (SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2),
            BULLSEYE_RADIUS,
            BULLSEYE_OUTLINE_WIDTH,
        )

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()
sys.exit()
