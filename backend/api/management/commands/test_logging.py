"""
Management command to test logging configuration.
"""
import logging
from django.core.management.base import BaseCommand

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = "Test logging configuration"

    def handle(self, *args, **options):
        """Test logging to ensure it's working correctly."""
        self.stdout.write("Testing logging configuration...")

        # Test different log levels
        logger.debug("Debug message")
        logger.info("Info message")
        logger.warning("Warning message")
        logger.error("Error message")

        self.stdout.write(self.style.SUCCESS("✅ Logging test completed successfully"))
