-- DropForeignKey
ALTER TABLE `movie_rent` DROP FOREIGN KEY `movie_rent_movieId_fkey`;

-- DropForeignKey
ALTER TABLE `movie_rent` DROP FOREIGN KEY `movie_rent_userId_fkey`;

-- AddForeignKey
ALTER TABLE `movie_rent` ADD CONSTRAINT `movie_rent_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movie_rent` ADD CONSTRAINT `movie_rent_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `movies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
